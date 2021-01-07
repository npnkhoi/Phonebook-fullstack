const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('build'))
const cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

const Person = require('./models/Person')

app.get('/', (request, response) => {
  response.send('Hello world');
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(result => {
    response.json(result)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person.findById(id)
  .then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(err => next(error))    
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number is missing' 
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })
  
  person.save()
  .then(result => {
    console.log(`added ${body.name} number ${body.number} to phonebook.`)
    response.json(result)
  })
  .catch((err) => next(err))
})

app.delete('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person.findByIdAndDelete(id)
    .then(result => {
      console.log(`Deleted user id ${id} with this response: ${result}`);
      response.json(result)
    })
    .catch(err => next(err))
})

app.put('/api/persons/:id', (request, response, next) => {
  const newPerson = request.body
  const id = request.params.id
  Person.findByIdAndUpdate(id, newPerson)
    .then(result => {
      if (result) {
        response.json(result)
      } else {
        response.status(404).send({error: 'Document not found'})
      }
    })
    .catch(err => next(err))
})

app.get('/info', (request, response, next) => {
  Person.find({})
    .then(persons => {
      response.send(`Phonebook has info for ${persons.length} people.\n\n${Date()}`)
    })
    .catch(err => next(err))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.log(error.message);
  if (error.name === 'CastError') {
    response.status(400).send({error: "Malformed id"})
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
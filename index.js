const { request } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

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

let persons = [
  {
    "name": "minh",
    "number": "123",
    "id": 5
  },
  {
    "name": "nam anh",
    "number": "456",
    "id": 6
  }
]

app.get('/', (request, response) => {
  response.send('Hello world');
})

app.get('/api/persons', (request, response) => {
  response.json(persons);
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number is missing' 
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error: 'Name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.get('/info', (request, response) => {
  response.send(`Phonebook has info for ${persons.length} people.\n\n${Date()}`)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
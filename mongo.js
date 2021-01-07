// This is a small script to play with mongodb

const mongoose = require('mongoose')
require('dotenv').config()

if (process.argv.length < 2) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: Number
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 2) {
  // Show all persons
  Person.find({}).then(result => {
    console.log(result);
    mongoose.connection.close()
  })
} else {
  /// Add a new person
  const name = process.argv[2]
  const number = Number(process.argv[3])
  const person = new Person({
    name: name,
    number: number
  })
  
  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook.`)
    mongoose.connection.close()
  })
}

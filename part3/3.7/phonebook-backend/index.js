require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

/* Create the body token to provide 
informations about 'body' json - just for POST requests */
morgan.token('body', function (req) { 
    if (req.method === 'POST'){
        return JSON.stringify(req.body)
    }
    
})

// Use the tiny configurations information plus the body token
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


app.get('/api/persons', (request, response, next) => {
    Person.find({})
        .then(persons => {
            response.json(persons)
        })
        .catch(error => next(error))
})

app.get('/info', (request, response, next) => {
    Person.find({}).then(persons => {
        const date = new Date()
        response.send(`<p>Phonebook has info for ${persons.length} people </p> <p> ${date} </p>`)
    })
        .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
    Person.findById(id).then(pers => {
        if (pers === undefined) {
            response.status(400).json({
                error: 'No person with this id in db'
            })
        } else {
            response.json(pers)
        }
    })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body
    
    // If the body don't contain the name or the number property
    if (!body.name || !body.number)
    {
        return response.status(400).json({error: 'You need to specify the name and the number'})

    } else {
        // Add it to the persons list
        const personObj = {
            name: body.name,
            number: body.number
        }
        const person = Person(personObj)
        person.save()
            .then(pers => {
                response.status(200).json(pers)
            })
            .catch(error => next(error))
    }
})

app.put('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
    const body = request.body
    const personObj = {
        name: body.name,
        number: body.number
    }
    Person.findByIdAndUpdate(id, personObj, {new: true})
        .then(updatedPerson => {
            console.log('Updated: ', updatedPerson)
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

const unknownEndpathRoute = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint for this path' })
}
// Handle the unknownEndpointRoute
app.use(unknownEndpathRoute)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
  
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('Server created'))
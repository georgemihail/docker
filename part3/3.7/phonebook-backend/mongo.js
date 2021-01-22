const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log("You need to provide 3 arguments: node mongo.js <password>")
    process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://georgemihail:${password}@cluster0.bxppa.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// Create the schema
personSchema = mongoose.Schema({
    name: String,
    number: String,
})

// Create the model
const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 5) {
    // Add a new person to db
    const person = Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    person.save().then(result => {
        console.log(`Added ${result.name} number ${result.number} to phonebook!`);
        mongoose.connection.close()
    });
} else if (process.argv.length === 3) {
    // Show all entries
    console.log("phonebook:")
    Person.find({}).then(result => {
        result.forEach(entry => {
            console.log(entry.name + " " + entry.number);
        })
        mongoose.connection.close();
    });
    
}
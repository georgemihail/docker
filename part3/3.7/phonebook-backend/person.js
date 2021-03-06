const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;
console.log(`connecting to url ${url.substring(0, 5)}`);

mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(result => {
    console.log("connected to MongoDB");
})
.catch(error => {
    console.log(`Error connecting to MB ${error.message}`);
});

const personSchema = mongoose.Schema({
    name: String,
    number: String
});

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id; //returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Person', personSchema);




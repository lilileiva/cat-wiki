const mongoose = require('mongoose');


let mostSearchedSchema = new mongoose.Schema({
    id: { type: String, required: true },
    idBreed: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    counter: { type: Number, required: true}
})

let mostSearchedModel = new mongoose.model('mostSearchedModel', mostSearchedSchema);


module.exports = mostSearchedModel;
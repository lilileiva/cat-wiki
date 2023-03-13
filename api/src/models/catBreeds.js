const mongoose = require('mongoose');


let catBreedsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true},
    origin: { type: String, required: true},
    temperament: { type: String, required: true},
    life_span: { type: String, required: true},
    adaptability: { type: Number, required: true},
    affection_level: { type: Number, required: true},
    child_friendly: { type: Number, required: true},
    grooming: { type: Number, required: true},
    intelligence: { type: Number, required: true},
    health_issues: { type: Number, required: true},
    social_needs: { type: Number, required: true},
    stranger_friendly: { type: Number, required: true}
})

let catBreedModel = new mongoose.model('catBreedModel', catBreedsSchema);


module.exports = catBreedModel;
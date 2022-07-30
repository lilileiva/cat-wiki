const axios = require('axios');
const catBreedsModel = require('../models/catBreeds.js');
const mostSearchedModel = require('../models/mostSearched.js');


const getCatBreeds = async (req, res) => {
    try {
        const breed = await catBreedsModel.find();

        if (breed) {
            return res.status(200).send(breed);
        } else {
            let breeds = await axios.get('https://api.thecatapi.com/v1/breeds');
            breeds = breeds.data
            breeds.map((breed) => {
                catBreedsModel.create({
                    id: breed.id,
                    name: breed.name,
                    image: breed.image ? breed.image.url : null,
                    description: breed.description,
                    origin: breed.origin,
                    temperament: breed.temperament,
                    life_span: breed.life_span,
                    adaptability: breed.adaptability,
                    affection_level: breed.affection_level,
                    child_friendly: breed.child_friendly,
                    grooming: breed.grooming,
                    intelligence: breed.intelligence,
                    health_issues: breed.health_issues,
                    social_needs: breed.social_needs,
                    stranger_friendly: breed.stranger_friendly
                })
            })
            return res.status(200).send(breeds);
        }
    } catch (error) {
        return res.status(404).send('There was an error...');
    }
}

const getMostSearchedCats = async (req, res) => {
    try {
        let breeds = await mostSearchedModel.find();

        breeds = breeds.sort(function(a, b) {
            if (a.counter > b.counter) return -1
            if (a.counter < b.counter) return 1
            else return 0;
        })

        return res.status(200).send(breeds);
    } catch (error) {
        return res.status(404).send('There was an error...');
    }
}

const getCatBreedByName = async (req, res) => {
    const { search } = req.params;

    try {
        const breed = await catBreedsModel.find({ name: { $regex: search, $options: "i" } });

        const breedOne = await catBreedsModel.findOne({ name: { $regex: search, $options: "i" } });

        if (breedOne) {
            const mostSearched = await mostSearchedModel.findOne({ id: breedOne._id })

            if (mostSearched) {
                const mostSearchedUpdated = await mostSearchedModel.findOneAndUpdate({ id: mostSearched.id }, { counter: mostSearched.counter + 1 })
            } else {
                mostSearchedModel.create({
                    id: breedOne._id,
                    idBreed: breedOne.id,
                    name: breedOne.name,
                    description: breedOne.description,
                    image: breedOne.image,
                    counter: 1
                })
            }
        }

        if (breed) {
            return res.status(200).send(breed);
        } else {
            let breed = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${search}`);
            breed = breed.data;

            return res.status(200).send(breed);
        }
    } catch (error) {
        console.log(error)
        return res.status(404).send('There was an error...');
    }
}

const catBreedDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const catBreed = await catBreedsModel.findOne({ id: id });
        res.status(200).send(catBreed);
    } catch (error) {
        res.status(404).send(error);
    }
}


const getCatImages = async (req, res) => {
    const { id } = req.params;
    try {
        const breed = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
        return res.status(200).send(breed.data);
    } catch (error) {
        return res.status(404).send('There was an error...');
    }
}


module.exports = {
    getCatBreeds,
    getMostSearchedCats,
    getCatBreedByName,
    getCatImages,
    catBreedDetails
};
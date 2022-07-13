const { Router } = require('express');
const routes = Router();
const {
    getCatBreeds,
    // getCatBreedByName
} = require('../controllers');

routes.use('/getbreeds', getCatBreeds);
// routes.use(`/getbreeds?name=${name}`, getCatBreedByName);

module.exports = routes;
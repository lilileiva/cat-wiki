const { Router } = require('express');
const routes = Router();
const {
    getCatBreeds,
    getCatBreedByName,
    getCatImages,
    catBreedDetails
} = require('../controllers');

routes.use('/getbreeds', getCatBreeds);
routes.use('/getbreedbyname/:search', getCatBreedByName);
routes.use('/getbreed/:id', catBreedDetails);
routes.use('/getbreedimages/:id', getCatImages);

module.exports = routes;
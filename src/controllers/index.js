const axios = require('axios');

const getCatBreeds = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const breed = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${name}`);
            return res.status(200).send(breed.data);
        } else {
            const breeds = await axios.get('https://api.thecatapi.com/v1/breeds');
            return res.status(200).send(breeds.data);            
        }
    } catch (error) {
        return res.status(404).send('There was an error...');
    }
}


module.exports = {
    getCatBreeds
};
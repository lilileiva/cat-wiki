import axios from 'axios';

import {
    GET_CAT_BREEDS,
    GET_CAT_BREED_DETAILS,
    GET_CAT_BREED_BY_NAME,
    GET_CAT_BREED_IMAGE,
    SEARCHBAR,
    CLEAR_SEARCHBAR,
    CLEAR_CAT_BREEDS,
    CLEAR_CAT_DETAILS,
    CLEAR_CAT_BREEDS_BY_NAME,
    CLEAR_CAT_IMAGES
} from './types.js';

const baseUrl = process.env.REACT_APP_BASE_URL;

export function getCatBreeds() {
    return async function (dispatch) {
        const breeds = await axios.get(`${baseUrl}/breeds`, {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        })
        try {
            dispatch({
                type: GET_CAT_BREEDS,
                payload: breeds.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function getCatBreedByName(query) {
    return async function (dispatch) {
        const breeds = await axios.get(`${baseUrl}/breeds/search?q=${query}&attach_image=1`, {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        })
        try {
            dispatch({
                type: GET_CAT_BREED_BY_NAME,
                payload: breeds.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function getCatBreedDetails(id) {
    return async function (dispatch) {
        const breed = await axios.get(`${baseUrl}/breeds/${id}`, {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        })
        try {
            dispatch({
                type: GET_CAT_BREED_DETAILS,
                payload: breed.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function getCatBreedImages(imageId) {
    return async function (dispatch) {
        const breedImage = await axios.get(`${baseUrl}/images/${imageId}`, {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        })
        try {
            dispatch({
                type: GET_CAT_BREED_IMAGE,
                payload: breedImage.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function searchbar(inputText) {
    return async function (dispatch) {
        try {
            dispatch({
                type: SEARCHBAR,
                payload: inputText
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function clearSearchbar() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_SEARCHBAR
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function clearCatBreeds() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_CAT_BREEDS
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function clearCatBreedsByName() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_CAT_BREEDS_BY_NAME
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function clearCatDetails() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_CAT_DETAILS
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function clearCatImages() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_CAT_IMAGES
            })
        } catch (error) {
            console.error(error);
        }
    }
}
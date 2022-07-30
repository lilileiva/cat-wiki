import axios from 'axios';

import {
    BASE_URL,
    GET_CAT_BREEDS,
    GET_MOST_SEARCHED_CATS,
    GET_CAT_BREED_DETAILS,
    GET_CAT_BREED_BY_NAME,
    GET_CAT_BREED_IMAGES,
    SEARCHBAR,
    CLEAR_SEARCHBAR,
    CLEAR_CAT_BREEDS,
    CLEAR_CAT_DETAILS,
    CLEAR_CAT_BREEDS_BY_NAME,
    CLEAR_CAT_IMAGES
} from './types.js';


export function getCatBreeds() {
    return async function(dispatch) {
        const breeds = await axios.get(`${BASE_URL}/getbreeds`)
        dispatch({
            type: GET_CAT_BREEDS,
            payload: breeds.data
        })
    }
}

export function getMostSearchedCats() {
    return async function(dispatch) {
        const breeds = await axios.get(`${BASE_URL}/getmostsearchedcats`)
        dispatch({
            type: GET_MOST_SEARCHED_CATS,
            payload: breeds.data
        })
    }
}

export function getCatBreedByName(search) {
    return async function(dispatch) {
        const breeds = await axios.get(`${BASE_URL}/getbreedbyname/${search}`)               
        dispatch({
            type: GET_CAT_BREED_BY_NAME,
            payload: breeds.data
        })
    }
}

export function getCatBreedDetails(id) {
    return async function(dispatch) {
        const breed = await axios.get(`${BASE_URL}/getbreed/${id}`)        
        dispatch({
            type: GET_CAT_BREED_DETAILS,
            payload: breed.data
        })
    }
}

export function getCatBreedImages(id) {
    return async function(dispatch) {
        const breedImage = await axios.get(`${BASE_URL}/getbreedimages/${id}`)
        dispatch({
            type: GET_CAT_BREED_IMAGES,
            payload: breedImage.data
        })
    }
}

export function searchbar(inputText) {
    return async function(dispatch) {
        dispatch({
            type: SEARCHBAR,
            payload: inputText
        })
    }
}

export function clearSearchbar() {
    return async function(dispatch) {
        dispatch({
            type: CLEAR_SEARCHBAR
        })
    }
}

export function clearCatBreeds() {
    return async function(dispatch) {
        dispatch({
            type: CLEAR_CAT_BREEDS
        })
    }
}

export function clearCatBreedsByName() {
    return async function(dispatch) {
        dispatch({
            type: CLEAR_CAT_BREEDS_BY_NAME
        })
    }
}

export function clearCatDetails() {
    return async function(dispatch) {
        dispatch({
            type: CLEAR_CAT_DETAILS
        })
    }
}

export function clearCatImages() {
    return async function(dispatch) {
        dispatch({
            type: CLEAR_CAT_IMAGES
        })
    }
}
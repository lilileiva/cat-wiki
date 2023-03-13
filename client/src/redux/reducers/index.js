import {
    GET_CAT_BREEDS,
    GET_MOST_SEARCHED_CATS,
    GET_CAT_BREED_DETAILS,
    GET_CAT_BREED_BY_NAME,
    GET_CAT_BREED_IMAGES,
    SEARCHBAR,
    CLEAR_SEARCHBAR,
    CLEAR_CAT_BREEDS,
    CLEAR_CAT_BREEDS_BY_NAME,
    CLEAR_CAT_DETAILS,
    CLEAR_CAT_IMAGES
} from '../actions/types';

const initialState = {
    catBreeds: [],
    mostSearched: [],
    catBreedsByName: [],
    catBreedDetails: {},
    catImages: [],
    searchbar: ""   
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CAT_BREEDS:
            return {
                ...state,
                catBreeds: action.payload
            }
        case GET_MOST_SEARCHED_CATS:
            return {
                ...state,
                mostSearched: action.payload
            }
        case GET_CAT_BREED_DETAILS:
            return {
                ...state,
                catBreedDetails: action.payload
            }
        case GET_CAT_BREED_BY_NAME:
            return {
                ...state,
                catBreedsByName: action.payload
            }
        case GET_CAT_BREED_IMAGES:
            const catImages = state.catImages
            return {
                ...state,                
                catImages: [...catImages.filter(image => image[0].url !== (action.payload)[0].url), action.payload]                
            }
        case SEARCHBAR:
            return {
                ...state,
                searchbar: action.payload
            }
        case CLEAR_SEARCHBAR:
            return {
                ...state,
                searchbar: ""
            }
        case CLEAR_CAT_BREEDS:
            return {
                ...state,
                catBreeds: []
            }
        case CLEAR_CAT_DETAILS:
            return {
                ...state,
                catBreedDetails: {}
            }
        case CLEAR_CAT_BREEDS_BY_NAME:
            return {
                ...state,
                catBreedsByName: []
            }
        case CLEAR_CAT_IMAGES:
            return {
                ...state,
                catImages: []
            }
        default: return { ...state }
    }
}

export default rootReducer;
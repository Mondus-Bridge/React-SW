import {ADD_PERSON_TO_FAVORITE,REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTypes';

export const setPersonToFavorite = person => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
});




export const removePersonFromFavorite = personID => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personID
});
import axios from 'axios'
import {GET_COUNTRIES, GET_COUNTRY, GET_COUNTRY_NAME, PAGINATOR, SORT_ALFABETIC} from './actions-types'


export function getCountries () {
    return async function(dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/countries')
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCountry (id) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({
                type: GET_COUNTRY,
                payload: response.data
            })
        } catch (error) {
            alert(`Error: ${error.response.data.error}`)
        }
    }
}

export function getCountryName (name) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/?name=${name}`)
            dispatch({
                type: GET_COUNTRY_NAME,
                payload: response.data
            })
        } catch (error) {
            alert(`Error: ${error.response.data.error}`)
        }
    }
}

export function postActivity (state) {
    return async function() {
        try {
            await axios.post('http://localhost:3001/activities', state)
            alert("Created Activity")
        } catch (error) {
            alert(`Error: ${error.response.data.error}`)
        }
    }
}

export function paginator (order) {
    return function (dispatch) {
        dispatch({
            type: PAGINATOR,
            payload: order
        })
    }
}

export function sortAlfabetic (order) {
    return function(dispatch){
        dispatch({
            type: SORT_ALFABETIC,
            payload: order
        })
    }
}
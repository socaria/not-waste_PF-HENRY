import axios from 'axios'

export function getSellers () {
    return async function(dispatch) {
        try {
            const seller = await axios.get('http://localhost:3001/seller')
            dispatch({
                type: 'GET_SELLER',
                payload: seller.data
            })
            // console.log(seller)
        } catch (error) {
            console.log(error)
        }
    }
}

export function getCities () {
    return async function(dispatch) {
        try {
            const cities = await axios.get('http://localhost:3001/city')
            dispatch({
                type: 'GET_CITIES',
                payload: cities.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProduct () {
    return async function(dispatch) {
        try {
            const price = await axios.get('http://localhost:3001/product')
            dispatch({
                type: 'GET_PRODUCT',
                payload: price.data
            })
            console.log(price.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDiet () {
    return async function(dispatch) {
        try {
        const diet = await axios.get('http://localhost:3001/dietas')    
            dispatch({
                type: 'GET_DIET',
                payload: diet.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function filtro(payload) {
    return {
        type: 'FILTRO_DIETA',
        payload
    }
}


export function orderPriceProduct(payload) {
    return {
        type: 'FILTRO_PRECIO',
        payload
    }
}
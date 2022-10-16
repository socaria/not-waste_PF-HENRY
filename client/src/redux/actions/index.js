import axios from 'axios'
const seller = require('../../seller.json')
const product = require('../../product.json')
export function getSellers () {
    return async function(dispatch) {
        try {
            // const seller = await axios.get('http://localhost:3001/seller')
            dispatch({
                type: 'GET_SELLER',
                payload: seller
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
            //console.log(price.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export function prodDetail (id) {
    console.log(id, 'hola')
    return async function(dispatch) {
        try {
            const detailProduct = await axios.get('http://localhost:3001/product/' + id)
            dispatch({
                type: 'PROD_DETAIL',
                payload: detailProduct.data
            })
            //console.log(price.data)
        } catch (error) {
            
            console.log(error)
        }
    }
}

export function getDiet () {
    return async function(dispatch) {
        try {
        const diet = await axios.get('http://localhost:3001/diets')    
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

export function getCustomer () {
    return async function(dispatch) {
        try {
            const customer = await axios.get('http://localhost:3001/customer')
            dispatch({
                type: 'GET_CUSTOMER',
                payload: customer.data
            })
            // console.log(seller)
        } catch (error) {
            console.log(error)
        }
    }
}

export function postCustomer(data) {
    return fetch('http://localhost:3001/customer', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

export function postSeller(data) {
    console.log(JSON.stringify(data))
    return fetch('http://localhost:3001/seller', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}
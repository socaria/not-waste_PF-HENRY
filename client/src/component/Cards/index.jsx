import React from 'react'
import Card from "../Card";
import products from './products'
// en donde sea llamado debe pasarse como {Cards(products)} donde products debe ser un array como el modelo adjunto en ./products.js

function Cards(props) {
        
    props = products
    return (
        <div className="row row-cols-1 row-cols-md-4 g-12 d-flex justify-content-center bg-dark mb-5">
            {
                props && props.map(product => (
                    Card(product)
                )
                )
            }
        </div>
    )
}

export default Cards
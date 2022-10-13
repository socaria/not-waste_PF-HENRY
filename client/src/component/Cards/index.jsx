import React from 'react'
import card from "../Card";

// en donde sea llamado debe pasarse como {cards(products)} donde products debe ser un array como el modelo adjunto en ./products.js

function cards(props) {

    return (
        <div class="row row-cols-1 row-cols-md-4 g-12 d-flex justify-content-center">
            {
                props && props.map(product => (
                    card(product)
                )
                )
            }
        </div>
    )
}

export default cards
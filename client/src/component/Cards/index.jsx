import React from 'react'
import Card from "../Card";
import products from './products'
import carrito from '../../imagenes/carrito.png'
// en donde sea llamado debe pasarse como {Cards(products)} donde products debe ser un array como el modelo adjunto en ./products.js

function Cards(props) {


    // props = products

    return (
        // <div className="row row-cols-1 row-cols-md-4 g-12 d-flex justify-content-center bg-dark mb-5">
        //     {
        //         props && props.map(product => (
        //             Card(product)
        //         )
        //         )
        //     }
        // </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <Card />
                </div>
                <div class="carousel-item">
                    <Card />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}

export default Cards
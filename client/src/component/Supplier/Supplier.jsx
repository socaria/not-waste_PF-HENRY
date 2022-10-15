import React, { useEffect } from 'react'
import Card from "../Card";
import { useSelector } from 'react-redux'
// import products from './products'
// import carrito from '../../imagenes/carrito.png'
// en donde sea llamado debe pasarse como {Cards(products)} donde products debe ser un array como el modelo adjunto en ./products.js

function Cards(props) {

    const allProduct = useSelector(state => state.product)
    // console.log(allProduct, 'HOLAAAA')
    // props = products

    return (
        // <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        //     <div class="carousel-inner">
        //         <div class="carousel-item active">
        //             <Card />
        //         </div>
        //         <div class="carousel-item">
        //             <Card />
        //         </div>
        //     </div>
        //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Anterior</span>
        //     </button>
        //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Siguiente</span>
        //     </button>
        // </div>
        <div>
            {
                allProduct?.map((e, i) => {
                    return (
                        <div key={i}>
                            <Card image={e.image} name={e.name} price={e.price}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards
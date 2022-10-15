import React from 'react'
import Card from '../Card/Card';
import '../CarouselSeller/CarouselSell.css'

function CarouselSeller(props) {

    return (
        <div className='bigContainer'>
            <h1 className='nameh1'>{props.name}</h1>
            <div className='containerPrincipal'>
                <div className='contCards'>
                    {
                        props.products.map(p => {
                            return (
                                <div className='cardsContainer'>
                                    <Card key={p.id} name={p.name} image={p.image} price={p.price} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CarouselSeller




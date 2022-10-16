import React from 'react'
import { Carousel } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import '../CarouselSeller/CarouselSell.css'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

function CarouselSeller({seller}) {

    return (
        <div className='container'>
            <h1 className='nameh1'>{capitalizeFirstLetter(seller.name)}</h1>
            <div className='carousel'>
                {
                    seller.products.map(product => {
                        return (

                            // <div className='cardsContainer'>
                            product.posts.map(post => {
                                return (
                                    <ProductCard 
                                    key={post.id} 
                                    product={product}
                                    post={post} />
                                )
                            }

                            )
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CarouselSeller




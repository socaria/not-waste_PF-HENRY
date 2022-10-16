import React from 'react'
import { Carousel } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard';
import '../CarouselSeller/CarouselSell.css'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

function CarouselSeller({seller}) {

    return (
        <div className='container'>
            <h1 className='seller-title'>{capitalizeFirstLetter(seller.name)}</h1>
            <div className='container-cards'>
                {
                    seller.products.map(product => {
                        return (
                            product.posts.map(post => {
                                return (
                                    <PostCard 
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




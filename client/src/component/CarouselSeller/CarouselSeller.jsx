import React from 'react'
import PostCard from '../PostCard/PostCard';
import '../CarouselSeller/carouselSeller.css'
import { Image } from 'react-bootstrap'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

function CarouselSeller({ seller }) {

    return (
        <div className='container'>
            <div className='container-carousel'>
                <div className='d-flex align-items-center mw-10r'>
                    <Image roundedCircle className='seller-image' src={seller.image} />
                    <h1 className='seller-title'>{capitalizeFirstLetter(seller.name)}</h1>
                </div>
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
        </div>
    )
}

export default CarouselSeller




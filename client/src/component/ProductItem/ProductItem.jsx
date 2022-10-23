import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { prodDetail, getSellers } from '../../redux/actions'
import './productItem.css';
import { useParams } from "react-router-dom";
import { Image } from 'react-bootstrap';
import CartButton from '../CartButton';



const ProductItem = ({ cart}) => {
    
    const handleCart = () => {
        console.log('handlecart')
    };
    return (
        <>

            <div className='d-flex align-items-center mw-10r justify-content-around'>
                <span className='mr-4 font-weight-normal'>{cart.amount}</span>
                {/* <span className='font-weight-normal'>|</span> */}
                <span className='ms-4 text-capitalize font-weight-normal'>{cart.name}</span>
                {/* <span className='font-weight-normal'>|</span> */}
                <span className='font-weight-normal'>{cart.price}</span>
                <Image roundedCircle className='product-image' src={cart.image} />
                {/* <CartButton className='dark' onClick={e => handleCart(e)}/> */}
            </div>
        </>
    )
}


export default ProductItem;

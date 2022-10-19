import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { prodDetail, getSellers } from '../../redux/actions'
import './productItem.css';
import { useParams } from "react-router-dom";
import { Image } from 'react-bootstrap';



const ProductItem = () => {
    return (
        <>

            <div className='d-flex align-items-center mw-10r justify-content-around'>
                <span className='font-weight-normal'>1</span>
                <span className='font-weight-normal'>|</span>
                <span className='font-weight-normal'>Sandwiches de miga</span>
                <span className='font-weight-normal'>|</span>
                <span className='font-weight-normal'>$500</span>
                <Image roundedCircle className='product-image' src='https://www.schaer.com/sites/default/files/styles/landscape_lg/public/2022-02/SCHAER_BK_XL%20SANDWICH.jpg?h=29bae58f&itok=K2jqqlnH' />
            </div>
        </>
    )
}


export default ProductItem;

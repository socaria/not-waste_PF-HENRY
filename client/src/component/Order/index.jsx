import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { prodDetail, getSellers } from '../../redux/actions'
import './order.css';
import { Card, Badge, ListGroup, Button } from 'react-bootstrap';
import NavBar from '../NavBar';
import Footer from '../Footer/index';
import ProductItem from '../ProductItem/ProductItem';
import { useAuth0 } from '@auth0/auth0-react';

const Order = () => {
    const {user} = useAuth0();
    const customers = useSelector(state => state.customer)
    const customer = customers.find(c => c.email === user.email)
    console.log("🚀 ~ file: index.jsx ~ line 13 ~ Order ~ customer", customer)
    // const { productId } = useParams()
    // const dispatch = useDispatch()
    // const product = useSelector(state => state.prodDetails)
    // // const seller = sellers.find(seller => seller.id === product.sellerId)
    // useEffect(() => {
    //     dispatch(prodDetail(productId));
    //     // dispatch(getSellers())
    // }, [])

// catnidad, fecha del pedido, titulo del pedido 

//current.customer
// PEDIDOS EN CURSO
// customer.orders.map(o => o.state === 'pendiente')
// PEDIDOS ENTREGADOS
// customer.orders.map(o => o.state === 'entregado')
// con la orden accedo a cantidad, fecha. debo acceder a traves de post
// a la info de fecha de entrega, y productId, y con eso acceder a 
// image, name, y onClick a detail.0

    return (
        <>
            <NavBar />
            <Card className="w-50 mx-auto mt-16 mb-50">
                <div className='d-flex position-relative justify-content-center' >
                    <Card.Title className='text-white fw-bold bg-light rounded p-2 '>
                        <span className='text-dark text-uppercase justify-content-center'>Mis pedidos</span>
                    </Card.Title>
                </div>
                <Card.Body className='p-0'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <div className='d-flex row'>
                                <Card.Subtitle className="mb-2 text-muted ">Pedidos en curso</Card.Subtitle>
                                {/* se agrega un product item por cada orden que esté en estado "en curso" */}
                                {/* <ProductItem /> */}
                                <div className='d-flex column justify-content-between'>
                                    <span>Fecha de la orden</span>
                                    <span>|</span>
                                    {/* el proveedor tendrá link para su store */}
                                    <span>Proveedor</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <div>
                                <Card.Subtitle className="mb-2 text-muted ">Pedidos entregados</Card.Subtitle>
                                {/* se agrega un product item por cada orden que esté en estado "entregado" */}
                                {/* <ProductItem /> */}
                            </div>
                        </ListGroup.Item>

                    </ListGroup>
                </Card.Body>
                <Card.Footer className='mb-4'></Card.Footer>
            </Card>
            <Footer className='footer-orders' />
        </>
    )
}


export default Order;

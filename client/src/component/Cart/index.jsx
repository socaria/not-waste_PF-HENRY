import React, { useState } from 'react';
import carrito from '../../imagenes/carrito.png'
import '../Cart/Cart.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img src={carrito} alt="logocarr" width='50px' className="mx-4" variant="primary" onClick={handleShow} id='logocart' />

      <Offcanvas show={show} onHide={handleClose} aria-controls="offcanvasRight">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Cart
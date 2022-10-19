import React, { useState } from "react";
import carrito from "../../imagenes/carrito.png";
import "../Cart/Cart.css";
import ProductItem from "../../component/ProductItem/ProductItem";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { postPay } from "../../redux/actions";

const dispatch = useDispatch;

function Cart() {
  const { isAuthenticated } = useAuth0();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePayment = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div
        width="50px"
        className="mx-4"
        variant="primary"
        onClick={handleShow}
        id="logocart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </div>

      <div className="cart-container">
        <Offcanvas
          show={show}
          onHide={handleClose}
          aria-controls="offcanvasRight"
        >
          <Offcanvas.Header className="mt-1 p-1">
            <Offcanvas.Title className="d-flex align-items-center mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="mx-4 mt-2">Tu Carrito</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Card>
              <Card.Header className="d-flex row">
                <span>Los artículos de tu carrito no están reservados.</span>
                <span>Completa tu compra para hacerte con ellos.</span>
                <br></br>
              </Card.Header>
              <Card.Body>
                <ListGroup
                  variant="flush"
                  className="d-flex justify-content-between"
                >
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <span>Total</span>
                      <span className="fw-bold text-success">$ 1000</span>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex row">
                    <ProductItem></ProductItem>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex row">
                    <ProductItem></ProductItem>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button
                  variant="dark"
                  className="d-flex w-50 justify-content-center"
                  onClick={(e) => handlePayment(e)}
                >
                  Pagar
                </Button>
              </Card.Footer>
            </Card>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Cart;

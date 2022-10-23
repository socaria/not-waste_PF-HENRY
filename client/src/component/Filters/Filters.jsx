import React, { useState } from "react";
import "./filters.css";
import ProductItem from "../ProductItem/ProductItem";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Accordion, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder, postPay, prodDetail } from "../../redux/actions";

function Filters(props) {
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  // var { user } = useAuth0();

  // let customers = useSelector((state) => state.customer);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let cart = useSelector((state) => state.cart);

  // const productId = cart.productId;

  // const price = cart?.amount * cart?.price;
  // const { isAuthenticated, loginWithRedirect } = useAuth0();



  return (
    <div>
      <div
        width="50px"
        display="flex"
        justify-content="right"
        variant="primary"
        onClick={handleShow}
      >
        <Button variant="light">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
          <span className="mx-2 align-items-center">Ordenar y filtrar</span>
        </Button>
      </div>

      <div className="cart-container">
        <Offcanvas
          show={show}
          onHide={handleClose}

        >
          <Offcanvas.Header className="mt-1 p-1">
            <Offcanvas.Title className="d-flex align-items-center mx-2">

              <span className="mx-4 mt-2">Filtrar y ordenar</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <div className="d-flex justify-content-center my-2">
              <Button variant="secondary">Limpiar filtros</Button>
            </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Filtrar por ciudad</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      Buenos Aires
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Córdoba
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Filtrar por precios</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      {" < $ 500"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" < $ 1000"}
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Filtrar por categoría</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      Panadería
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Supermercado
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Filters;

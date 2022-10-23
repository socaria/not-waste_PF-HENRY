import React, { useState } from "react";
import "./filters.css";
import ProductItem from "../ProductItem/ProductItem";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Accordion, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers, postPay, prodDetail } from "../../redux/actions";

function Filters() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  let queryParams = useSelector(state => state.queryParams)
  let cities = useSelector(state => state.cities)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCleanFilters(e) {
    e.preventDefault();
    window.location.reload();
  }

  function handleFilterCategory(category) {
    dispatch(
      getSellers({
        ...queryParams,
        category: category,
      })
    );
  }

  function handleFiltersPrice(price) {
    dispatch(
      getSellers({
        ...queryParams,
        price: price,
      })
    );
  }

  function handleFiltersCity(city) {
    dispatch(
      getSellers({
        ...queryParams,
        city: city,
      })
    );
  }

  let i = 0;
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
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
              <Button onClick={(e) => handleCleanFilters(e)} variant="secondary">Limpiar filtros</Button>
            </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey='0'>
                <Accordion.Header key='0'>Filtrar por precio</Accordion.Header>
                <Accordion.Body className="d-flex row">
                  <Button className="my-2" onClick={() => handleFiltersPrice('500')}>{'< $500'}</Button>
                  <Button onClick={() => handleFiltersPrice('1000')}>{'< $1000'}</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header key='1'>Filtrar por categoría</Accordion.Header>
                <Accordion.Body className="d-flex row">
                  <Button onClick={() => handleFilterCategory('panaderia')}>Panadería</Button>
                  <Button className="my-2" onClick={() => handleFilterCategory('supermercado')}>Supermercado</Button>
                  <Button onClick={() => handleFilterCategory('restaurante')}>Restaurante</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header key='2'>Filtrar por ciudad</Accordion.Header>
                <Accordion.Body className="d-flex row">
                  {cities?.map((city) => {
                    console.log("🚀 ~ file: Filters.jsx ~ line 128 ~ {cities?.map ~ city", city)
                    return (
                      <Button
                        onClick={() => handleFiltersCity(city.name)}
                        key={city.id}
                        className='cities-button'
                      >
                        {city.name}
                      </Button>

                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div >
  );
}

export default Filters;

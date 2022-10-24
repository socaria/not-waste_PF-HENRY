import React, { useState } from "react";
import "./filters.css";
import ProductItem from "../ProductItem/ProductItem";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Accordion, ToggleButtonGroup , ToggleButton } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getSellers, postPay, prodDetail } from "../../redux/actions";

function Filters() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  let queryParams = useSelector(state => state.queryParams);
  let cities = useSelector(state => state.cities);
  const [priceValue, setPriceValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  const prices = [
    { name: '< $500', value: '500' },
    { name: '< $1000', value: '1000' }
  ]
  const categories = [
    { name: 'Panadería', value: 'panaderia' },
    { name: 'Restaurante', value: 'restaurante' },
    { name: 'Supermercado', value: 'supermercado' }
  ]

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCleanFilters(e) {
    e.preventDefault();
    window.location.reload();
  }

  function handleCloseCategory(e) {
    e.preventDefault();
    dispatch(getSellers({
      ...queryParams,
      category: null,
    }))
  }

  function handleCloseCity(e) {
    e.preventDefault();
    dispatch(getSellers({
      ...queryParams,
      city: null,
    }))
  }

  function handleClosePrice(e) {
    e.preventDefault();
    dispatch(getSellers({
      ...queryParams,
      price: null,
    }))
  }

  function handleFilterCategory(e, category) {
    e.preventDefault();
    setCategoryValue(e.currentTarget.checked);
    dispatch(
      getSellers({
        ...queryParams,
        category: category,
      })
    );
  }

  function handleFiltersPrice(e, price) {
    e.preventDefault();
    setPriceValue(e.currentTarget.checked);
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
  let k = 0;
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
              <Button onClick={(e) => handleCleanFilters(e)} variant="light">Limpiar filtros</Button>
            </div>
            <div>
              {queryParams?.price &&
               <Button className="mx-2 my-1" onClick={e => handleClosePrice(e)}>Price: {'< $'}{queryParams.price}</Button>
              }
               {queryParams?.category &&
               <Button className="mx-2 my-1"  onClick={e => handleCloseCategory(e)}>Category: {queryParams.category}</Button>
              }
              {queryParams?.city &&
               <Button className="mx-2 my-1"  onClick={e => handleCloseCity(e) }>City: {queryParams.city}</Button>
              }
            </div>
            <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
              <Accordion.Item eventKey='0'>
                <Accordion.Header key='0'>Filtrar por precio</Accordion.Header>
                <Accordion.Body className="d-flex row">
                  <ToggleButtonGroup type= "checkbox" className="my-2 d-flex row">
                    {prices.map((price, idx) => {
                      return (
                        <ToggleButton
                          key={idx}
                          id={`price-${idx}`}
                          type="checkbox"
                          variant="light"
                          name="price"
                          value={price.value}
                          checked={priceValue === price.value}
                          onClick={(e) => handleFiltersPrice(e, price.value)}
                          className="my-2"
                        >
                          {price.name}
                        </ToggleButton>
                      )
                    })}
                  </ToggleButtonGroup >
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header key='1'>Filtrar por categoría</Accordion.Header>
                <Accordion.Body className="d-flex row">
                <ToggleButtonGroup  type= "checkbox" className="my-2 d-flex row">
                    {categories.map((category) => {
                      return (
                        <ToggleButton
                          key={k++}
                          id={`category-${k++}`}
                          type="checkbox"
                          variant="light"
                          name="category"
                          value={category.value}
                          checked={categoryValue === category.value}
                          onClick={(e) => handleFilterCategory(e, category.value)}
                          className="my-2"
                        >
                          {category.name}
                        </ToggleButton>
                      )
                    })}
                  </ToggleButtonGroup >
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header key='2'>Filtrar por ciudad</Accordion.Header>
                <Accordion.Body className="d-flex row">
                  {cities?.map((city) => {
                    return (
                      <Button
                        onClick={() => handleFiltersCity(city.name)}
                        key={city.id}
                        className='cities-button'
                        variant='light'
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

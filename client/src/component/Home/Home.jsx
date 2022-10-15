import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCities, getDiet, getSellers, getProduct, orderPriceProduct } from "../../redux/actions";
import Card from "../Card/Card";
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer';
import '../Home/Home.css'

function Home() {
    const dispatch = useDispatch()

    const [, setOrden] = useState()
    const cities = useSelector(state => state.cities)
    const diet = useSelector(state => state.diet)
    const product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getCities())
        dispatch(getSellers())
        dispatch(getProduct())
        dispatch(getDiet())

    }, [dispatch])

    function handleCities(e) {
        dispatch(getCities())
        console.log(e.target.value)
    }

    function handleOrderPrice(e) {
        e.preventDefault()
        dispatch(orderPriceProduct(e.target.value))
        setOrden(e.target.value)
    }

    function handleFilterDiet(e) {
        dispatch(getDiet())
    }

    function handleFilterCategory(e) {

    }
    return (
        <div>
            <NavBar />
            <div className="container-fluid my-3">
                <div className="contSelects">
                    <select onChange={handleCities} className="selects">
                        <option>CIUDADES</option>
                        {
                            cities?.map(cities => {
                                return (
                                    <option value={cities.name} key={cities.id}>{cities.name}</option>
                                )

                            })
                        }
                        <option>BARRIOS MAPEADOS</option>
                    </select>


                    <select onChange={handleOrderPrice} className="selects">
                        <option>PRECIOS</option>
                        <option value='mayor'>MENOR A MAYOR</option>
                        <option value='menor'>MAYOR A MENOR</option>
                    </select>


                    <select onChange={handleFilterDiet} className="selects">
                        <option>DIETA</option>
                        {
                            diet?.map(cities => {
                                return (
                                    <option value={cities.name} key={cities.id}>{cities.name}</option>
                                )

                            })
                        }
                    </select>
                    <select onChange={handleFilterCategory} className="selects">
                        <option>CATEGORIA</option>
                        <option>CATEGORIAS DEL PROVEEDOR</option>
                    </select>
                </div>
                
{/* ----------------------------------------------------------CARRUSEL, HAY QUE ARREGLAR-------------------------- */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carruselCard">
                                <h1>primer imagen</h1>
                                {
                                    product?.map((e, i) => {
                                        return (
                                            <div key={i}>
                                                <Card image={e.image} name={e.name} price={e.price} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carruselCard">
                            <h1>segunda imagen</h1>
                                    {
                                        product?.map((e, i) => {
                                            return (
                                                <div key={i}>
                                                    <Card image={e.image} name={e.name} price={e.price} />
                                                </div>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
{/* ----------------------------------------------------------CARRUSEL, HAY QUE ARREGLAR-------------------------- */}

            </div>
            <Footer />
        </div>
    )
}


export default Home
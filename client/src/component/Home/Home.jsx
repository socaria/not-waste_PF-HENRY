import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCities, getDiet, getSellers, getProduct, orderPriceProduct, filterByCity } from "../../redux/actions";
import CarouselSeller from '../CarouselSeller/CarouselSeller'
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer';
import '../Home/Home.css';
import { Dropdown } from 'react-bootstrap';

function Home() {
    const dispatch = useDispatch()

    const [orden, setOrden] = useState()
    const cities = useSelector(state => state.cities)
    const diet = useSelector(state => state.diet)
    const sellers = useSelector(state => state.seller)
    // const product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getCities());
        dispatch(getSellers());
        dispatch(getProduct());
        dispatch(getDiet());
    }, [dispatch])

    var [filter, setFilter] = useState({
        city: "Floresta",
        diet: "vegana",
        category: "all"
    })

    const ordenamiento = function () {

        const allSeller = sellers.map((e) => ({
            id: e.id,
            name: e.name,
            image: e.image,
            adress: e.adress,
            category: e.category,
            cities: e.cities?.map((c) => c.name),
            cuit: e.cuit,
            email: e.email,
            products: e.products.map((d) => ({
                name: d.name,
                price: d.price,
                diets: d.diets?.map(e => e.name)
            })),
        }));

        // filtrados = allSeller.filter( e => e.includes("Parque Avellaneda"))
        let filtrados = []

        if (filter.city !== "all") {
            for (let i = 0; i < allSeller.length; i++) {
                if (allSeller[i].cities.includes(filter.city)) {
                    filtrados.push(allSeller[i])
                }
            }
        } else { filtrados = allSeller }

        if (filtrados.length && filter.diet !== "all") {
            const auxdiet = []
            for (let i = 0; i < filtrados.length; i++) {
                for (let e = 0; e < filtrados[i].products.length; e++) {
                    if (filtrados[i].products[e].diets.includes(filter.diet)) {
                        auxdiet.push(filtrados[i])
                    }
                } filtrados = auxdiet
            }
        }

        console.log(filtrados)
    }




    function handleFilterByCities(e) {
        e.preventDefault();
        dispatch(filterByCity(e.target.value));
    }

    // function handleCities(e) {
    //     dispatch(getCities())
    // }

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
            {ordenamiento()}
            <NavBar />
            <div className="container-fluid my-3">
                <div className="contSelects">
                    <Dropdown >
                        <Dropdown.Toggle  variant="success" id="dropdown-basic">
                            Filtrar por ciudad
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                cities?.map(cities => {
                                    return (
                                        <Dropdown.Item className='text-capitalize' value={cities.name} key={cities.id} >{cities.name}</Dropdown.Item>
                                    )

                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <select className="selects" onChange={(e) => handleFilterByCities(e)}>
                        <option>CIUDADES</option>
                        {
                            cities?.map(cities => {
                                return (
                                    <option value={cities.name} key={cities.id} >{cities.name}</option>
                                )

                            })
                        }
                        <option>BARRIOS MAPEADOS</option>
                    </select> */}


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
                {

                    sellers?.map(seller => {
                        if (seller.products.find(p => p.posts.length > 0))
                            return (
                                <CarouselSeller key={seller.id} seller={seller} />
                            )
                    })
                }

            </div>
            <Footer />
        </div>
    )
}


export default Home
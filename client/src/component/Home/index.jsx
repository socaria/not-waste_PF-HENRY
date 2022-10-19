import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCities,
  getDiet,
  getSellers,
  getProduct,
} from "../../redux/actions";
import CarouselSeller from "../CarouselSeller";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "../Home/Home.css";
import Message from "../Message";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.seller);
  const queryParams = useSelector((state) => state.queryParams);
  const errorMessage = useSelector((state) => state.errorMessage);

  useEffect(() => {
    dispatch(getCities());
    dispatch(getSellers());
    dispatch(getProduct());
    dispatch(getDiet());
  }, [dispatch]);

  function handleCleanFilters(e) {
    e.preventDefault();
    window.location.reload();
  }

  function handleFiltersCity(e) {
    e.preventDefault();
    dispatch(
      getSellers({
        ...queryParams,
        city: e.target.value,
      })
    );
  }

  function handleFiltersPrice(e) {
    e.preventDefault();
    dispatch(
      getSellers({
        ...queryParams,
        price: e.target.value,
      })
    );
  }

  function handleFilterCategory(e) {
    e.preventDefault();
    dispatch(
      getSellers({
        ...queryParams,
        category: e.target.value,
      })
    );
  }
  let currentCities = sellers.map((s) => s.cities.map((c) => c.name));
  return (
    <div>
      <NavBar />
      {errorMessage ? (
        <>
          <button className="selects" onClick={(e) => handleCleanFilters(e)}>
            Limpiar filtros
          </button>
          <Message message={errorMessage} type="error" />
        </>
      ) : (
        <div className="container-fluid my-3">
          <div className="contSelects">
            {queryParams && (
              <button
                className="selects"
                onClick={(e) => handleCleanFilters(e)}
              >
                Limpiar filtros
              </button>
            )}
            <select
              key={"filterBy_" + queryParams?.city}
              value={queryParams?.price || ""}
              className="selects"
              onChange={(e) => handleFiltersCity(e)}
            >
              <option>Ciudades</option>
              {currentCities?.map((cities) => {
                return (
                  <option
                    className="filter-options"
                    value={cities}
                    key={uuidv4()}
                  >
                    {cities}
                  </option>
                );
              })}
            </select>

            <select onChange={(e) => handleFiltersPrice(e)} className="selects">
              <option>Precios</option>
              <option value="500">{`< $500`}</option>
              <option value="1000">{`< $1000`}</option>
            </select>

            {/* <select onChange={handleFilterDiet} className="selects">
                            <option>DIETA</option>
                            {
                                diet?.map(cities => {
                                    return (
                                        <option value={cities.name} key={cities.id}>{cities.name}</option>
                                    )

                                })
                            }
                        </select> */}
            <select
              onChange={(e) => handleFilterCategory(e)}
              className="selects"
            >
              <option>Categoría</option>
              <option value="panaderia">Panadería</option>
              <option value="restaurante">Restaurante</option>
              <option value="supermercado">Supermercado</option>
            </select>
          </div>
          {sellers?.map((seller) => {
            if (seller.products.find((p) => p.posts.length > 0))
              return <CarouselSeller key={seller.id} seller={seller} />;
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;

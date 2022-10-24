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
import Filters from "../Filters/Filters";
import "../Home/Home.css";
import Message from "../Message";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap"

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

  return (
    <div>
      <NavBar isSearchVisible />
      {errorMessage ? (
        <div className="mx-4">
          <Button variant="light" onClick={e => handleCleanFilters(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
            <span className="mx-2 align-items-center">Limpiar filtros</span>
          </Button>
          <Message className="d-flex " message={errorMessage} type="error" />
        </div>
      ) : (
        <div className="container-fluid my-3">
          <Filters />
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

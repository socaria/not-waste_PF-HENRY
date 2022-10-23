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


  // function handleFiltersCity(e) {
  //   e.preventDefault();
  //   dispatch(
  //     getSellers({
  //       ...queryParams,
  //       city: e.target.value,
  //     })
  //   );
  // }

  // function handleFiltersPrice(e) {
  //   e.preventDefault();
  //   dispatch(
  //     getSellers({
  //       ...queryParams,
  //       price: e.target.value,
  //     })
  //   );
  // }

  // function handleFilterCategory(e) {
  //   e.preventDefault();
  //   dispatch(
  //     getSellers({
  //       ...queryParams,
  //       category: e.target.value,
  //     })
  //   );
  // }
  // let currentCities = sellers.map((s) => s.cities.map((c) => c.name));
  return (
    <div>
      <NavBar isSearchVisible />
      {errorMessage ? (
        <>
          <Filters />
          <Message message={errorMessage} type="error" />
        </>
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

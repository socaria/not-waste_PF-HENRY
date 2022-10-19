import React from "react";
import { Route, Routes } from "react-router-dom";
import Registrering from "../component/Registrering";
import LandingPage from "../component/LandingPage";
import Home from "../component/Home";
import Profile from "../component/Profile";
import Contact from "../component/Contact";
import Developers from "../component/Developers";
import PostDetail from "../component/PostDetail";
import FormProduct from "../component/FormProducts";
import Order from "../component/Order";

function RouteController() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/register" element={<Registrering />} />
      <Route path="/home" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/developers" element={<Developers />} />
      <Route path="/home/:productId" element={<PostDetail />} />
      <Route path="/formproduct" element={<FormProduct />} />
      <Route path="/customer/orders" element={<Order />}/>
    </Routes>
  );
}

export { RouteController };

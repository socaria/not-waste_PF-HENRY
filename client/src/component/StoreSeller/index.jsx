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
import { Image } from "react-bootstrap";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useAuth0 } from '@auth0/auth0-react';
import PostItem from "../PostItem";

function StoreSeller() {
  const dispatch = useDispatch();
  var sellers = useSelector((state) => state.seller);
  console.log("🚀 ~ file: index copy.jsx ~ line 28 ~ StoreSeller ~ sellers", sellers)
  var { user } = useAuth0();
  console.log("🚀 ~ file: index copy.jsx ~ line 29 ~ StoreSeller ~ user", user)
  let seller = sellers?.find(s => s.email === user?.email)
  useEffect(() => {
    dispatch(getSellers());
  }, []);
  return (
    <div className="container">
      {
        <div className="container-carousel">
          <div className="d-flex align-items-center mw-10r">
            <Image roundedCircle className="seller-image" src={seller?.image} />
            <div>
              <h1 className="seller-title">
              {seller?.name}
              </h1>
              <h5 className="seller-title">
                {seller?.category}
              </h5>
            </div>
          </div>
          <div className="container-cards">
            {seller?.products.map((product) => {
              return product.posts.map((post) => {
                return <PostItem key={post.id} product={product} post={post} />;
              });
            })}
          </div>
        </div>}
    </div>

  )
}

export default StoreSeller;

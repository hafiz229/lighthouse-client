import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import LatestFeatures from "../LatestFeatures/LatestFeatures";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <LatestFeatures></LatestFeatures>
      <Products></Products>
      <ChooseUs></ChooseUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

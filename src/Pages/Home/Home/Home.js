import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;

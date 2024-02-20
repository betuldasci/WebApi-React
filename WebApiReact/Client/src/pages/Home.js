import React from 'react'
import Slider from "../components/HomePage/Slider";
import ChooseProduct from "../components/HomePage/ChooseProduct";
import BestSelling from "../components/HomePage/BestSelling";
import OfferBanner from "../components/HomePage/OfferBanner";
import SpecialOfferCounter from "../components/HomePage/SpecialOfferCounter";
import NewestProduct from "../components/HomePage/NewestProduct";
import BestBrand from "../components/HomePage/BestBrand";

function Home() {
  return (
    <div>
 
      <Slider />
      <ChooseProduct />
      <BestSelling />
      <OfferBanner />
      <SpecialOfferCounter />
      <NewestProduct />
    
      <BestBrand />

    </div>
  );
}

export default Home
import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <div className="pt-20 px-50">
      <Hero />

      <LeftSection
        imageUrl="images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try demo "
        link2="Learn more "
      />

      <RightSection imageUrl="images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="Learn more "/>

      <LeftSection
        imageUrl="images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin"
        link2=""
      />

        <RightSection imageUrl="images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="Kite Connect"/>

        <LeftSection
        imageUrl="images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link1=""
        link2=""
      />

      <p className="text-xl text-center my-25">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

      
      <Universe />

    </div>
  );
};

export default ProductsPage;

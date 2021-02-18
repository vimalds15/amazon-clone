import React from "react";
import Product from "./Product";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={1}
            title="Acer TravelMate P6 Thin & Light Business Laptop, 14 FHD IPS, Intel Core i5-10310U with vPro, 8GB DDR4, 256GB SSD, 23 Hrs Battery"
            price={65499}
            image="https://m.media-amazon.com/images/I/71y2OudJ4QL._AC_UY218_.jpg"
            rating={5}
          />

        <Product
            id={2}              
            title="BlueDriver Bluetooth Pro OBDII Scan Tool for iPhone & Android"
            price={7199}
            image="data:image/webp;base64,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"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id={3}
            title="Dreaming Wapiti Duvet Cover King,Soft and Breathable with Zipper Closure & Corner Ties"
            price={41999}
            image="https://m.media-amazon.com/images/I/61JRrtXVAvL._AC_UL320_.jpg"
            rating={4}
          />
        <Product
            id={4}       
            title="Samsung Galaxy S21 Ultra 5G | US Version 5G Smartphone |"
            price={89990}
            image="https://m.media-amazon.com/images/I/61bLefD79-L._AC_UY218_.jpg"
            rating={5}
          />
        <Product
            id={5}         
            title="[4 Pack] Ferilinso Screen Protector for Samsung Galaxy S21 5G with 2 Pack Camera Lens Protector"
            price={799}
            image="https://m.media-amazon.com/images/I/71qOj-WQ9rL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id={6}
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
            price={9990}
            image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

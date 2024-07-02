import React, { useEffect } from 'react';
import Banner from '../components/Home/Banner';
import Products from '../components/Products/Products';
import AllInOne from '../components/AllinOne/AllinOne';
import MyCarousel from '../components/Home/MyCarousel';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Banner />
      <MyCarousel/>
      <Products />
      <AllInOne/>
    </div>
  );
};

export default Home;
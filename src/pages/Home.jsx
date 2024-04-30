import React, { useEffect } from 'react';
import Banner from '../components/Home/Banner';
import Products from '../components/Products/Products';
import AllInOne from '../components/AllinOne/AllinOne';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Banner />
      <Products />
      <AllInOne/>
    </div>
  );
};

export default Home;
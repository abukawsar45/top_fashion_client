import React from 'react';
import Banner from '../components/Home/Banner';
import Products from '../components/Products/Products';
import AllinOne from '../components/AllinOne/AllinOne';

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <AllinOne/>
    </div>
  );
};

export default Home;
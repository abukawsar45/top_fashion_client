import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import TopNavbar from '../shared/Navbar/TopNavbar';

const Main = () => {
  return (
    <div className=' sm:mx-1 md:mx-2 lg:mx-4 2xl:mx-auto max-w-[1800px]  '>
      <TopNavbar/>
      <Navbar />
      <div className=' min-h-[1800px] pt-8 '>
        <Outlet />
        adsf
      </div>
      <div className='my-2'>
        <h1 className=''>hiii</h1>
      </div>
    </div>
  );
};

export default Main;
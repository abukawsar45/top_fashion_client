import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import TopNavbar from '../shared/Navbar/TopNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-phone-input-2/lib/style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='mx-2 md:mx-3 lg:mx-4 2xl:mx-auto max-w-[1800px] font-nunito'>
    
      <TopNavbar />
      <Navbar />
      {/* <div className='  '> */}
      <div className=' md:min-h-[20vh] lg:pt-8 '>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

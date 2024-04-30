import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import TopNavbar from '../shared/Navbar/TopNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-phone-input-2/lib/style.css';


const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=' sm:mx-1 md:mx-2 lg:mx-4 2xl:mx-auto max-w-[1800px] font-nunito'>
    
      <TopNavbar />
      <Navbar />
      <div className=' min-h-[90vh] pt-8 '>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

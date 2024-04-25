import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import TopNavbar from '../shared/Navbar/TopNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=' sm:mx-1 md:mx-2 lg:mx-4 2xl:mx-auto max-w-[1800px]  '>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
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

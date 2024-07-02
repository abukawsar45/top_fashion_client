import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import tf from '../../assets/tf.png';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className='bg-gray-600 text-white mt-4 md:mt-8 lg:mt-32 px-2 md:px-4 lg:px-12'>
      <footer className='container   py-2 md:py-4 lg:py-9'>
        <div>
          <div className='grid grid-cols-1 mt-4 md:mt-0 md:grid-cols-3 lg:grid-cols-7 gap-2 md:gap-8 lg:gap-8 '>
            <div className='my-4 md:my-0 justify-start md:items-center'>
              <Link href='/' className=' text-2xl flex'>
                <p className='logo-top'>
                  <span className='monoton-regular logo-text '>
                    Top Fashion
                  </span>
                </p>
              </Link>
              <p className='mt-2 md:mt-4 lg:w-56 '>
                Our goal is to build a beautiful Bangladesh.
              </p>
            </div>
            <div className='hidden lg:block'></div>
            {/* company */}
            <div>
              <h3 className='text-sm uppercase font-bold'>Company</h3>
              <div className='flex flex-col gap-0 md:gap-1 lg:gap-4 mt-0 md:mt-2 lg:mt-4'>
                <p>
                  <Link>About</Link>
                </p>
                <p>
                  <Link>Pricing</Link>
                </p>
                <p>
                  <Link>Careers</Link>
                </p>
              </div>
            </div>
            {/* solutions */}
            <div>
              <h3 className='text-sm uppercase font-bold'>Solutions</h3>
              <div className='flex flex-col gap-0 md:gap-1 lg:gap-4 mt-0 md:mt-2 lg:mt-4'>
                <p>
                  <Link>Search</Link>
                </p>
                <p>
                  <Link>connect</Link>
                </p>
                <p>
                  <Link>Research</Link>
                </p>
                <p>
                  <Link>Academy</Link>
                </p>
              </div>
            </div>
            {/* resources */}
            <div>
              <h3 className='text-sm uppercase font-bold'>Resources</h3>
              <div className='flex flex-col gap-0 md:gap-1 lg:gap-4 mt-0 md:mt-2 lg:mt-4'>
                <p>
                  <Link>Blogs</Link>
                </p>
                <p>
                  <Link>Forms</Link>
                </p>
              </div>
            </div>
            {/* support */}
            <div>
              <h3 className='text-sm uppercase font-bold'>Support</h3>
              <div className='flex flex-col gap-0 md:gap-1 lg:gap-4 mt-0 md:mt-2 lg:mt-4'>
                <p>
                  <Link>Help</Link>
                </p>
                <p>
                  <Link>Contact Us</Link>
                </p>
              </div>
            </div>
            {/* legal */}
            <div>
              <h3 className='text-sm uppercase font-bold'>Legal</h3>
              <div className='flex flex-col gap-0 md:gap-1 lg:gap-4 mt-0 md:mt-2 lg:mt-4'>
                <p>
                  <Link>Privacy</Link>
                </p>
                <p>
                  <Link>Terms</Link>
                </p>
                <p>
                  <Link>Accessibility</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-t border-white my-3 md:my-4 lg:my-8 ' />
        <div className='w-full flex justify-between items-center mt-4'>
          <div>
            <p className='text-sm'>Dhaka 1216, Bangladesh</p>
          </div>
          <div>
            <p className='text-sm'>Copyright &copy; {year} Top Fashion</p>
          </div>
          <div className='flex space-x-6'>
            <Link href='#' className='text-white text-2xl'>
              <FaFacebook />
            </Link>
            <Link href='#' className='text-white text-2xl'>
              <FaInstagram />
            </Link>
            <Link href='#' className='text-white text-2xl'>
              <FaLinkedin />
            </Link>
            <Link href='#' className='text-white text-2xl'>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

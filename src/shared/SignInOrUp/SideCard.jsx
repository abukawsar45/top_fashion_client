import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { BiLogoGmail, BiSolidLocationPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SideCard = ({ title, direction }) => {
  return (
    <div
      className='bg-black flex flex-col justify-between'
      data-aos={direction}
    >
      <div className='grid grid-rows-2 py-4 px-2 md:px-12 text-white '>
        <div className='my-4 md:my-8 lg:my-12'>
          <h3 className='text-xl md:text-2xl lg:text-3xl'>
            Welcome to our <span>website</span>
          </h3>
          <p className='my-2 text-2xl md:text-4xl text-blue-600 font-bold '>
            {title}
          </p>
          <div className='mt-4 md:mt-8 lg:mt-16'>
            <p className='mt-2 md:mt-6 lg:mt-10 flex justify-start items-center gap-2 md:gap-5'>
              <span>
                <BiLogoGmail className='text-xl text-blue-500' />
              </span>{' '}
              ourteam@gmail.com
            </p>

            <p className='my-2 flex justify-start items-center gap-2 md:gap-5'>
              <span>
                <BiSolidLocationPlus className='text-xl text-blue-500' />
              </span>{' '}
              New Elephant Road, Dhaka 1216, Bangladesh.
            </p>
          </div>
        </div>
        {/* social link */}
        <div className='mb-0 mt-auto  flex justify-start items-end gap-5'>
          <Link>
            {' '}
            <span>
              <BsFacebook className='text-2xl hover:text-blue-500' />
            </span>{' '}
          </Link>
          <Link>
            {' '}
            <span>
              <BsTwitter className='text-2xl hover:text-blue-500' />
            </span>{' '}
          </Link>
          <Link>
            {' '}
            <span>
              <BsInstagram className='text-2xl hover:text-blue-500' />
            </span>{' '}
          </Link>
          <Link>
            {' '}
            <span>
              <BsLinkedin className='text-2xl hover:text-blue-500' />
            </span>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
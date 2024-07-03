import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaSkype,
  FaTwitter,
  FaWhatsapp,
  FaRegEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div data-aos='fade-down' className='bg-gray-500 '>
      <div className='hidden w-[95%] mx-auto lg:flex justify-between'>
        {/* Contact section */}
        <div className='flex space-x-5 py-2'>
          <div className='flex items-center justify-center '>
            <div className='text-white text-xs px-1'>
              {' '}
              <FaLocationArrow></FaLocationArrow>
            </div>
            <p className='text-white text-xs'>Tangail, Dhaka, Bangladesh</p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-white text-xs'>
              <FaPhoneAlt></FaPhoneAlt>
            </div>
            <a href='tel:+8801581629171' className='text-white text-xs'>
              +(88) 01581-629271
            </a>
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <div className='text-white text-xs'>
              <FaRegEnvelope />{' '}
            </div>
            <a
              href='mailto:kawsar1146236@gmail.com'
              className='text-white text-xs'
            >
              kawsar1146236@gmail.com
            </a>
          </div>
        </div>

        {/* social site link */}
        <div className='flex items-center justify-center space-x-4 py-2'>
          <div className='text-white text-sm'>
            <Link target='_blank' to='https://www.facebook.com/'>
              <FaFacebook />
            </Link>
          </div>
          <div className='text-white text-sm'>
            <Link target='_blank' to='https://twitter.com/?lang=en'>
              <FaTwitter />
            </Link>
          </div>
          <div className='text-white text-sm'>
            <Link target='_blank' to='https://www.instagram.com/'>
              <FaInstagram />
            </Link>
          </div>
          <div className='text-white text-sm'>
            <Link target='_blank' to='https://www.skype.com/en/'>
              <FaSkype />
            </Link>
          </div>
          <div className='text-white text-sm'>
            <Link
              target='_blank'
              to='https://api.whatsapp.com/send?phone=8801581629271&text=Hi%20Top%20Fashions%20owner,%20May%20I%20know%20more?'
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

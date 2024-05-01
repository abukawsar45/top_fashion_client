import React, { useContext, useState } from 'react';
import ActiveLink from '../../utilities/ActiveLink';
import { MyContext } from '../../providers/MyProvider';
import { Link } from 'react-router-dom';
import tf from '../../assets/tf.png';
import './Navbar.css';
import { IoBagCheckOutline } from 'react-icons/io5';
import SideModal from '../../components/Modal/SideModal';
import CloseButton from '../../components/Button/CloseButton';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isShowAddedModal, setIsShowAddedModal] = useState(false);
  // console.log(showNavLinks)
  const {
    authInfo:{signUpWithEmail,
    loginWithGoogle,
    updateUserProfile,
    user,
    setUser,
    logout,}
  } = useContext(MyContext);

  console.log(user);

  const handleSearchBox = (e) => {
    e.preventDefault();
    console.log('handleSearchBox clicked');
  };

  const showAddedCart = () => {
    setIsShowAddedModal(true);
    console.log('showAddedCart');
  };

  const closeIsShowAddedModal = () => {
    setIsShowAddedModal(false);
  };
  const navData = (
    <>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/aboutUs'>About Us</ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/blog'>Blog</ActiveLink>
      </li>
      {user && (
        <li onClick={() => setShowNavLinks(!showNavLinks)}>
          <button
            className='px-2 py-1 bg-red-400 hover:bg-red-500 rounded-md font-semibold'
            onClick={() => logout()}
          >
            Logout
          </button>
        </li>
      )}
      {!user && (
        <>
          <li onClick={() => setShowNavLinks(!showNavLinks)}>
            <ActiveLink to='/login'>Login</ActiveLink>
          </li>
          <li onClick={() => setShowNavLinks(!showNavLinks)}>
            <ActiveLink to='/register'>
              <a>Register</a>
            </ActiveLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      data-aos='fade-up'
      className='bg-red-900 bg-opacity-10 sticky top-0 z-20  py-1 md:py-2 transition-colors duration-300 ease-in bg-transparent  backdrop-blur'
    >
      <div
        data-aos='fade-down '
        className='w-full bg-blend-multiply flex justify-between lg:items-center bg-base-100 text-font'
      >
        <div className='ml-1 flex gap-4 lg:hidden'>
          <div className=''>
            {' '}
            <label tabIndex={0} className=' lg:hidden '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10  p-2 bg-gray-400 hover:bg-gray-600 rounded-full '
                onClick={() => setShowNavLinks(!showNavLinks)}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`flex flex-col gap-2 bg-gray-300 mt-3 z-1 lg:hidden shadow  rounded-md w-52 ${
                showNavLinks ? 'px-2 py-3' : 'p-0'
              }`}
            >
              <p>
                {showNavLinks && (
                  <div className='lg:hidden'>
                    <Link href='/' className=''>
                      <span
                        onClick={() => setShowNavLinks(!showNavLinks)}
                        className='monoton-regular logo-text '
                      >
                        Top Fashion
                      </span>
                    </Link>
                  </div>
                )}
              </p>
              {showNavLinks && navData}
            </ul>
          </div>
        </div>

        <div className='hidden lg:block'>
          <Link href='/' className=' text-2xl flex'>
            <img src={tf} alt='logo ' className='w-8' />
            <p className='logo-top'>
              <span className='monoton-regular logo-text '>Top Fashion</span>
            </p>
          </Link>
        </div>

        <div className='flex  gap-1 '>
          {' '}
          <form
            onSubmit={handleSearchBox}
            className='flex h-8 rounded-md overflow-hidden'
          >
            <input
              type='text'
              placeholder='products name'
              required
              name='search'
              className=' border-r-0 rounded-md rounded-r-none text-sm px-2 py-1  w-10/12 border-2 border-cyan-500 focus:outline-none focus:border-blue-500'
            />
            <button
              type='submit'
              className='rounded-md rounded-l-none text-sm px-2 py-1  border-2 border-l-0 bg-emerald-400 hover:bg-emerald-500 hover:text-white border-green-500  focus:outline-none text-white sm:px-4  rounded-r-md'
            >
              <span className='lg:hidden'>
                <FiSearch />
              </span>{' '}
              <div className='hidden lg:block'>Search</div>
            </button>
          </form>
          <div
            className='relative lg:hidden ml-4 mr-4 bg- cursor-pointer group hover:text-blue-500'
          > <Link to='/addedItems' >
            <IoBagCheckOutline className='font-bold text-2xl ' />
            <p className='absolute top-0 -right-2 text-xs bg-violet-600 group-hover:bg-blue-600 w-4 h-4 rounded-full flex justify-center items-center text-white'>
              1
            </p>
            </Link>
          </div>
        </div>
        <div className=' hidden lg:flex items-center'>
          <ul className='flex flex-col lg:flex-row gap-8 px-1'>{navData}</ul>
          <div
            className='relative ml-4 mr-1 bg- cursor-pointer group hover:text-blue-500'
          >
           <Link to='/addedItems' >
            <IoBagCheckOutline className='font-bold text-2xl ' />
            <p className='absolute top-0 -right-2 text-xs bg-violet-600 group-hover:bg-blue-600 w-4 h-4 rounded-full flex justify-center items-center text-white'>
              1
              </p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

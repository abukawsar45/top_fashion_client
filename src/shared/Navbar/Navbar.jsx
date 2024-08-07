import React, { useContext, useState } from 'react';
import ActiveLink from '../../utilities/ActiveLink';
import { MyContext } from '../../providers/MyProvider';
import { Link, useNavigate } from 'react-router-dom';
import tf from '../../assets/tf.png';
import './Navbar.css';
import { IoBagCheckOutline } from 'react-icons/io5';
import SideModal from '../../components/Modal/SideModal';
import CloseButton from '../../components/Button/CloseButton';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import useFetch from '../../hooks/useFetch';


const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isShowAddedModal, setIsShowAddedModal] = useState(false);
  const navigate = useNavigate();
  // console.log(showNavLinks)
  const { authInfo, userData } = useContext(MyContext);
  const [searchValue, setSearchValue] = useState('');
  const { data, loading } = useFetch(`/productsname/${searchValue}`);
  const {
    userData: {
      loading: localLoading,
      setLoading: setLocalLoading,
      addToBookingDB,
      getBookingCart,
      removeFromBookingDB,
      
    },
  } = useContext(MyContext);
    
  const storedCart = getBookingCart();
  const selectedCount = Object.keys(storedCart).length;
  // console.log(Object.keys(storedCart).length);

  const {
    signUpWithEmail,
    loginWithGoogle,
    updateUserProfile,
    user,
    setUser,
    logout
  } = authInfo;

  // console.log(showNavLinks);

  const handleSearchBox = (e) => {
    e.preventDefault();
    const sValue = e?.target?.search?.value;
    // console.log(sValue);
    setSearchValue(sValue);
    // console.log(data);
    
    navigate(`search/${sValue}` , {state: {data, loading}})
    // setData(data);
    setSearchValue ('');
  };

  const showAddedCart = () => {
    setIsShowAddedModal(true);
    // console.log('showAddedCart');
  };

  const closeIsShowAddedModal = () => {
    setIsShowAddedModal(false);
  };
  const navData = (
    <>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/'>Home</ActiveLink>
      </li>
      <li onClick={() => setShowNavLinks(!showNavLinks)}>
        <ActiveLink to='/aboutUs'>About Us</ActiveLink>
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
    <div className='bg-blue-400 sticky top-0 z-20  py-1 md:py-2 transition-colors duration-300 bg-transparent  backdrop-blur'>
      <div className='w-full bg-blend-multiply flex justify-between lg:items-center bg-base-100 text-font'>
        <div className='ml-1 flex gap-4 lg:hidden'>
          <div className=''>
            {' '}
            <label tabIndex={0} className=' lg:hidden '>
              <div onClick={() => setShowNavLinks(!showNavLinks)}>
                {' '}
                {!showNavLinks ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-10  p-2 bg-gray-400 hover:bg-gray-600 rounded-full '
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
                ) : (
                  <p className='bg-red-400 hover:bg-red-500 rounded-full p-2 text-white w-8 h-8'>
                    <TfiClose />
                  </p>
                )}
              </div>{' '}
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
          <form onSubmit={handleSearchBox} className='flex h-8 rounded-md '>
            <input
              type='text'
              placeholder='products name'
              required
              value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)}
              name='search'
              className=' border-r-0 rounded-md rounded-r-none text-sm px-2 py-1  w-full border-2 border-cyan-500 focus:outline-none focus:border-blue-500'
            />
            <button
              type='submit'
              className='rounded-md rounded-l-none text-sm px-2 py-1  border-2 border-l-0 bg-emerald-400 hover:bg-emerald-500 hover:text-white border-green-500  focus:outline-none text-white sm:px-4  rounded-r-md'
            >
              <span className='lg:text-xl'>
                <FiSearch />
              </span>{' '}
            </button>
          </form>
          <div className='relative lg:hidden ml-4 mr-4 bg- cursor-pointer group hover:text-blue-500'>
            {' '}
            <Link to='/addedItems'>
              <IoBagCheckOutline className='font-bold text-2xl ' />
              <p className='absolute top-0 -right-2 text-xs bg-violet-600 group-hover:bg-blue-600 w-4 h-4 rounded-full flex justify-center items-center text-white'>
                +
              </p>
            </Link>
          </div>
        </div>
        <div className=' hidden lg:flex items-center'>
          <ul className='flex flex-col lg:flex-row gap-8 px-1'>{navData}</ul>
          <div className='relative ml-4 mr-1 bg- cursor-pointer group hover:text-blue-500'>
            <Link to='/addedItems'>
              <IoBagCheckOutline className='font-bold text-2xl ' />
              <p className='absolute top-0 -right-2 text-xs bg-violet-600 group-hover:bg-blue-600 w-4 h-4 rounded-full flex justify-center items-center text-white'>
                +
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

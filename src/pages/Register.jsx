import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import useTitles from '../shared/Navbar/useTitles';
import SideCard from '../shared/SignInOrUp/SideCard';
import SocialLoginWithGoogle from '../shared/SignInOrUp/SocialLogin/SocialLoginWithGoogle';

const Register = () => {

  useTitles('| Register');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { signUpWithEmail, loginWithGoogle, updateUserProfile, user, setUser } =
    useContext(AuthContext);

  console.log(user);

  const handleRegister = (event) => {
    event.preventDefault();
    console.log('first')
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value
    const photo = form.photo.value;
    console.log(name, email, password, confirmPassword, photo)

    // 
     signUpWithEmail(email, password)
       .then((result) => {
         const loggedUser = result.user;
         setError('');
         setSuccess('Register Successfull');
         form.reset();
         setUser({ ...user, displayName: name, photoURL: photo });
         updateUserProfile(name, photo);
         //console.log(updateUserProfile)
         navigate(from);
       })
       .catch((error) => {
         setSuccess('');
         setError(error.message);
       });

  }

  return (
    <div className='mx-auto transition-all duration-150'>
      <div className='flex  flex-col-reverse lg:flex-row justify-center gap-4'>
        {/* left part */}
        <SideCard title='Register Now' direction='fade-left' />
        {/* input form */}
        <div className='bg-white px-10 ' data-aos='fade-right'>
          <form onSubmit={handleRegister} className=''>
            <div className='text-left my-2 md:mt-8 lg:mt-12'>
              <label htmlFor='name' className='px-2'>
                Full Name
              </label>
              <br />
              <input
                type='text'
                id='name'
                placeholder='Abukawsar'
                name='name'
                required
                className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
              />
            </div>
            <div className='text-left my-2 md:mt-8 lg:mt-12'>
              <label htmlFor='email' className='px-2'>
                Email
              </label>
              <br />
              <input
                type='email'
                id='email'
                placeholder='abc@gmail.com'
                name='email'
                required
                className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
              />
            </div>
            <div className='text-left my-2 md:mt-8 lg:mt-12'>
              <label htmlFor='password' className='px-2'>
                password
              </label>
              <br />
              <input
                type='password'
                id='password'
                name='password'
                required
                placeholder='********'
                className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
              />
            </div>
            <div className='text-left my-2 md:mt-8 lg:mt-12'>
              <label htmlFor='confirmPassword' className='px-2'>
                Confirm Password
              </label>
              <br />
              <input
                type='password'
                id='confirmPassword'
                placeholder='********'
                name='confirmPassword'
                className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
                required
              />
            </div>
            <div className='text-left my-2 md:mt-8 lg:mt-12'>
              <label htmlFor='photo' className='px-2'>
                Photo URL <small>(optional)</small>
              </label>
              <br />
              <input
                type='url'
                id='photo'
                placeholder='********'
                name='photo'
                className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
              />
            </div>
            <div>
              <input
                type='submit'
                value='Register'
                required
                className='rounded-lg bg-blue-500 mt-4 md:mt-6 text-gray-800 hover:text-blue-500 hover:bg-white px-8 md:px-12 py-1 md:py-2 lg:py-3 uppercase border-2 font-bold border-sky-600 cursor-pointer'
              />
            </div>
          </form>
          <div className='w-full mt-8 border border-gray-200'></div>

          <div>
            <p>
              <small>
                Already have an account? &#160;
                <span>
                  <Link className='text-blue-500' to='/login'>
                    Please Login
                  </Link>
                </span>
              </small>
            </p>
          </div>
          <div className='flex my-6 flex-col w-full border-opacity-50'>
            <div className=' border-b-2 my-2 border-t-blue-500'></div>
            <button>
              <SocialLoginWithGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

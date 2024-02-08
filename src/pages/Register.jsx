import React, { useContext, useState } from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { BiLogoGmail, BiSolidLocationPlus } from 'react-icons/bi';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
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
        <div className='bg-black flex flex-col justify-between'>
          <div className='grid grid-rows-2 py-4 px-2 md:px-12 text-white '>
            <div className='my-4 md:my-8 lg:my-12'>
              <h3 className='text-xl md:text-2xl lg:text-3xl'>
                Welcome to our <span>website</span>
              </h3>
              <p className='my-2 text-2xl md:text-4xl text-blue-600 font-bold '>
                Register Now
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
        {/* input form */}
        <div className='bg-white px-10 '>
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
                Photo URL{' '}
                <small>(optional)</small>
              </label>
              <br />
              <input
                type='url'
                id='photo'
                placeholder='********'
                name='photo'
                className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
                required
              />
            </div>
            <div>
              <input
                type='submit'
                value='login'
                required
                className='rounded-lg bg-gray-400 mt-4 md:mt-6 text-blue-900 hover:bg-white px-8 md:px-12 py-1 md:py-2 lg:py-3 uppercase border-2 font-bold border-sky-600 '
              />
            </div>
          </form>
          <div className='w-full mt-8 border border-gray-200'></div>

          <div>
            <p>
              <small>
                No Accout? &#160;
                <span>
                  <Link className='text-blue-500' to='/login'>
                    Create a new
                  </Link>
                </span>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

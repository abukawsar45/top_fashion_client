import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { signUpWithEmail, loginWithGoogle, updateUserProfile, user, setUser } =
    useContext(AuthContext);

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
    <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
      <div className='max-w-md mx-auto'>
        <div>
          <h1 className='text-2xl font-semibold'>
            Register Form with Top Fashion
          </h1>
        </div>
        <div className='divide-y divide-gray-200'>
          <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
            <form action='' onSubmit={handleRegister}>
              <div className='relative mb-2'>
                <input
                  autoComplete='off'
                  id='name'
                  name='name'
                  type='text'
                  className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                  placeholder='Full Name'
                />
                <label
                  htmlFor='name'
                  className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                >
                  Full Name
                </label>
              </div>
              <div className='relative mb-2'>
                <input
                  autoComplete='off'
                  id='email'
                  name='email'
                  type='text'
                  className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                  placeholder='Email address'
                />
                <label
                  htmlFor='email'
                  className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                >
                  Email Address
                </label>
              </div>
              <div className='relative mb-2'>
                <input
                  autoComplete='off'
                  id='password'
                  name='password'
                  type='password'
                  className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                  placeholder='Password'
                />
                <label
                  htmlFor='password'
                  className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                >
                  Password
                </label>
              </div>
              <div className='relative mb-2'>
                <input
                  autoComplete='off'
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                  placeholder='confirmPassword'
                />
                <label
                  htmlFor='confirmPassword'
                  className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                >
                  Confirm Password
                </label>
              </div>
              <div className='relative mb-2'>
                <input
                  autoComplete='off'
                  id='photo'
                  name='photo'
                  type='url'
                  className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600'
                  placeholder='photo'
                />
                <label
                  htmlFor='photo'
                  className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                >
                  Photo URL
                </label>
              </div>
              <div className='my-1' >
                <p className='text-teal-400'>{success ? success : ''}</p>
                <p className='text-red-600'>{error ? error : ''}</p>
              </div>

              <div className='relative mb-2'>
                <button className='bg-blue-500 text-white rounded-md px-2 py-1'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

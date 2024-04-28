import React from 'react';

const abc = () => {
  // const phoneNumber = getPhoneNumberFromUserInput();
  const appVerifier = window.recaptchaVerifier;

  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    size: 'invisible',
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  });

  window.recaptchaVerifier = new RecaptchaVerifier(
    auth,
    'recaptcha-container',
    {
      size: 'normal',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      },
    }
  );

  recaptchaVerifier.render().then((widgetId) => {
    window.recaptchaWidgetId = widgetId;
  });

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
    });

  const code = getCodeFromUserInput();
  confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  return (
    <div>
      {
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
                  placeholder='Abu Kawsar'
                  name='name'
                  required
                  className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96 focus:outline-none focus:border-blue-500'
                />
              </div>
              {showPhone && (
                <div className='text-left my-2 md:mt-8 lg:mt-12'>
                  <label htmlFor='email' className='px-2'>
                    Phone{' '}
                    <small>( Must be include your country code +88 ) </small>
                  </label>
                  <br />
                  <input
                    type='text'
                    id='phone'
                    placeholder='+8801581629271'
                    name='phone'
                    required
                    className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96 focus:outline-none focus:border-blue-500'
                  />
                </div>
              )}
              {!showPhone && (
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
                    className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96 focus:outline-none focus:border-blue-500'
                  />
                </div>
              )}
              <div>
                <p
                  onClick={() => setShowPhone(!showPhone)}
                  className='cursor-pointer hover:text-blue-500'
                >
                  {showPhone ? 'Use email' : 'Use phone'}
                </p>
              </div>

              {!showPhone && (
                <div className='text-left my-2 md:mt-8 lg:mt-12'>
                  <label htmlFor='password' className='px-2'>
                    password
                  </label>
                  <br />
                  <div className='w-full relative '>
                    <p className='flex'>
                      <input
                        type={showPass ? 'text' : 'password'}
                        id='password'
                        placeholder='********'
                        name='password'
                        className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96 focus:outline-none focus:border-blue-500'
                        required
                      />
                      <p
                        onClick={() => setShowPass(!showPass)}
                        className='absolute ml-72 md:ml-80 cursor-pointer hover:text-blue-500'
                      >
                        {showPass ? 'show' : 'hide'}
                      </p>
                    </p>
                  </div>
                </div>
              )}
              {!showPhone && (
                <div className='text-left my-2 md:mt-8 lg:mt-12'>
                  <label htmlFor='confirmPassword' className='px-2'>
                    Confirm Password
                  </label>
                  <br />
                  <div className='w-full relative '>
                    <p className='flex'>
                      <input
                        type={showConPass ? 'text' : 'password'}
                        id='confirmPassword'
                        placeholder='********'
                        name='confirmPassword'
                        className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96 focus:outline-none focus:border-blue-500'
                        required
                      />
                      <p
                        onClick={() => setShowConPass(!showConPass)}
                        className='absolute ml-72 md:ml-80 cursor-pointer hover:text-blue-500'
                      >
                        {showConPass ? 'show' : 'hide'}
                      </p>
                    </p>
                  </div>
                </div>
              )}
              <div className='text-left my-2 md:mt-8 lg:mt-12'>
                <label htmlFor='photo' className='px-2'>
                  Photo URL <small>(optional)</small>
                </label>
                <br />
                <input
                  type='file'
                  id='photo'
                  placeholder='********'
                  name='photo'
                  className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96 focus:outline-none focus:border-blue-500'
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
      }
    </div>
  );
};

export default abc;
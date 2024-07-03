import React, { useContext,useEffect, useState } from 'react';
import {  MyContext } from '../providers/MyProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitles from '../shared/Navbar/useTitles';
import SideCard from '../shared/SignInOrUp/SideCard';
import SocialLoginWithGoogle from '../shared/SignInOrUp/SocialLogin/SocialLoginWithGoogle';

//
import { RecaptchaVerifier } from 'firebase/auth';
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import OtpInput from 'otp-input-react';
import Button from '../components/Button/Button';
import { CgSpinner } from 'react-icons/cg';
import PhoneInput from 'react-phone-input-2';
import { ToastContainer, toast } from 'react-toastify';
import { TbEyeOff, TbEye } from 'react-icons/tb';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { IoMail } from 'react-icons/io5';

const Register = () => {
  useTitles('| Register');

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [showPhone, setShowPhone] = useState(true);
  const [showForm, setShowForm] = useState(true);
  //
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const {
    authInfo:{auth,
    loginWithPhone,
    signUpWithEmail,
    loginWithGoogle,
    updateUserProfile,
    user,
    setUser,}
  } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || '/';

  // console.log(userName, user);

  if (user) {
    navigate('/', { replace: true });
  }
  const onCaptchVerify = () => {
    // if (!window.recaptchaVerifier)
    // {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          onSignUp();
        },
        'expired-callback': () => {},
      }
    );
    // }
  };

  const onSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const phone = form?.phone?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const confirmPassword = form?.confirmPassword?.value;
    const photo = form?.photo?.value;
    if (showPhone) {
      setPhoneNumber(phone);
      setShowForm(false);
      setVerifyLoading(true);
      onCaptchVerify();

      const appVerifier = window.recaptchaVerifier;
      loginWithPhone(phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setVerifyLoading(false);
          toast.success('OTP sended successfully!');
          setShowOTP(true);
        })
        .catch((error) => {
          // console.log(error);
          toast.error(error?.message);
          setVerifyLoading(false);
        });
    } else {
      if (password != confirmPassword) {
        toast.error('Passwords do not match!!');
      } else {
        signUpWithEmail(email, password)
          .then((result) => {
            const loggedUser = result.user;
            setError('');
            setSuccess('Register Successful');
            form.reset();
            setUser({ ...user, displayName: name, photoURL: photo });
            updateUserProfile(name, photo);
            toast.success('Registration Successful');
            // console.log(updateUserProfile);
            navigate(from);
          })
          .catch((error) => {
            setSuccess('');
            toast.error(error?.message );
            setError(error.message);
          });
      }
    }
  };

  const onOTPVerify = () => {
    // console.log('otp');
    setVerifyLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        // console.log(res);
        updateUserProfile(userName, photoURL).then(() => {
          // console.log(userName, photoURL);
        });
        toast.success('Registration Successful');
        setVerifyLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
        // toast.error('Sorry, your OTP is incorrect!');
             toast.error(error?.message+'!');
        setVerifyLoading(false);
      });
  };

  return (
    <div className='mx-auto bg-blue-300 transition-all duration-150 py-4 md:py-6 lg:py-8'>
      <ToastContainer />
      <div id='recaptcha-container'></div>
      {showForm ? (
        <div className='flex  flex-col-reverse lg:flex-row justify-center gap-4'>
          {/* left part */}
          <SideCard title='Register Now' direction='fade-left' />
          {/* input form */}
          <div className='bg-white px-10 ' data-aos='fade-right'>
            <form onSubmit={onSignUp} className=''>
              <div className='text-left my-2 md:mt-8 lg:mt-12'>
                <label htmlFor='name' className='px-2'>
                  Full Name
                </label>
                <br />
                <input
                  type='text'
                  id='name'
                  placeholder='Abu Kawsar'
                  onChange={(e) => setUserName(e.target.value)}
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
                  className='cursor-pointer text-blue-400 hover:text-blue-500'
                >
                  {showPhone ? (
                    <span className='flex items-center gap-2'>
                      Use mail <IoMail />
                    </span>
                  ) : (
                    <span className='flex items-center gap-2'>
                      Use Phone <MdOutlinePermPhoneMsg />
                    </span>
                  )}
                </p>
              </div>

              {!showPhone && (
                <div className='text-left my-2 md:mt-8 lg:mt-12'>
                  <label htmlFor='password' className='px-2'>
                    password
                  </label>
                  <br />
                  <div className='w-full relative flex items-center '>
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
                      className='absolute right-2 cursor-pointer hover:text-blue-500'
                    >
                      {showPass ? <TbEye /> : <TbEyeOff />}
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
                  <div className='w-full relative flex items-center'>
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
                      className='absolute right-2 cursor-pointer hover:text-blue-500'
                    >
                      {showConPass ? <TbEye /> : <TbEyeOff />}
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
      ) : (
        <>
          {showOTP ? (
            <>
              <div className='my-4 py-4 flex flex-col justify-center gap-4 '>
                <div className='flex flex-col justify-center gap-1'>
                  <div className='bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full'>
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label
                    htmlFor='otp'
                    className='font-bold text-2xl text-emerald-600 text-center'
                  >
                    Enter your OTP
                  </label>
                </div>
                <OtpInput
                  OTPLength={6}
                  value={otp}
                  onChange={setOtp}
                  otpType='number'
                  disabled={false}
                  className='mx-auto gap-2 otp-container '
                ></OtpInput>
                <Button
                  onClick={onOTPVerify}
                  bg={'bg-violet-400'}
                  disabled={verifyLoading}
                  width={
                    'w-8/12 md:w-4/12 lg:w-2/12 mx-auto flex justify-center items-center gap-2'
                  }
                >
                  {verifyLoading && (
                    <CgSpinner size={20} className=' mt-1 animate-spin' />
                  )}
                  <span>Verify OTP</span>
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className='my-4 py-4 flex flex-col justify-center gap-4 '>
                <div className='flex flex-col justify-center gap-1'>
                  <div className='bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full'>
                    <BsTelephoneFill size={30} />
                  </div>
                  <label
                    htmlFor='phoneNumber'
                    className='font-bold text-2xl text-emerald-600 text-center'
                  >
                    Verify Your phone number
                  </label>
                </div>

                <div className='mx-auto'>
                  <PhoneInput
                    country={'bd'}
                    value={phoneNumber}
                    disabled
                    className=''
                  ></PhoneInput>
                </div>
                <Button
                  disabled={true}
                  bg={'bg-violet-400'}
                  width={
                    'w-8/12 md:w-4/12 lg:w-2/12 mx-auto flex justify-center items-center gap-2'
                  }
                >
                  {verifyLoading && (
                    <CgSpinner size={20} className=' mt-1 animate-spin' />
                  )}
                  <span>Send code via SMS</span>
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Register;

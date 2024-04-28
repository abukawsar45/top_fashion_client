import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitles from '../shared/Navbar/useTitles';
import SideCard from '../shared/SignInOrUp/SideCard';
import SocialLoginWithGoogle from '../shared/SignInOrUp/SocialLogin/SocialLoginWithGoogle';
import { AuthContext } from '../providers/AuthProvider';



const Login = () => {

   useTitles('| Login');

   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [showPhone, setShowPhone] = useState(true);

   const { loginWithGoogle, loginWithEmailAndPassword } =
     useContext(AuthContext);

   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      loginWithEmailAndPassword(email, password)
        .then((result) => {
          const loggedUser = result.user;

          setError('');
          setSuccess('login successfull');
          form.reset();
          navigate(from);
        })
        .catch((error) => {
          setSuccess('');
          setError(error.message);
        });
  }
  

  return (
    <div className='mx-auto transition-all duration-150'>
      <div className='flex  flex-col-reverse lg:flex-row-reverse justify-center gap-4'>
        {/* left part */}
        <SideCard title='Login Now' direction='fade-right' />
        {/* input form */}
        <div className='bg-white px-10 ' data-aos='fade-left'>
          <form onSubmit={handleLogin} className=''>
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
                {showPhone ? 'Use mail' : 'Use phone'}
              </p>
            </div>
          {!showPhone &&  <div className='text-left my-2 md:mt-8 lg:mt-12'>
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
            </div>}
            <div>
              <input
                type='submit'
                value='Login'
                required
                className='rounded-lg bg-blue-500 mt-4 md:mt-6 text-gray-800 hover:text-blue-500 hover:bg-white px-8 md:px-12 py-1 md:py-2 lg:py-3 uppercase border-2 font-bold border-sky-600 cursor-pointer'
              />
            </div>
          </form>
          <div className='w-full mt-8 border border-gray-200'></div>
          <div>
            <p>
              <small>
                No Accout? &#160;
                <span>
                  <Link className='text-blue-500' to='/register'>
                    Create a new
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

export default Login;

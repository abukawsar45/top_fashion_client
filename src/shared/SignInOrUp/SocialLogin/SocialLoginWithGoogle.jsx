import { useContext } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../../../providers/MyProvider';

const SocialLoginWithGoogle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { authInfo:{loginWithGoogle} } = useContext(MyContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setError('');
        setSuccess('Login successful');
        navigate(from);
      })
      .catch((err) => {
        setSuccess('');
        setError(err.message);
      });
  };

  return (
    <div>
      <div className='text-center'>
        <button
          onClick={handleGoogleLogin}
          className=' group px-3 py-4 rounded-lg bg-blue-400 flex justify-center items-center w-full hover:bg-blue-300 duration-200'
        >
          <FcGoogle className='text-3xl mr-2' />{' '}
          <span className='text-white font-semibold text-xl group-hover:text-blue-600'>
            Sign in With Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLoginWithGoogle;

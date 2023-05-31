import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import H1 from '../components/common/components/H1';
import Form from '../components/login/Form';
import SocialLogin from '../components/login/SocialLogin';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const error = searchParams.get('error');

  useEffect(() => {
    if (error) {
      navigate('/login');
      alert(error);
    }
  }, [error]);

  return (
    <div className="flex flex-col h-screen mt-[3%] items-center">
      <H1 name={'인터뷰북'} />
      <div className="w-[30%] my-[1%] border-[1px] border-lightGray/30"></div>
      <div className="w-[40%] h-[50%] flex flex-col items-center">
        <Form />
        <SocialLogin />
      </div>
    </div>
  );
}

export default LoginPage;

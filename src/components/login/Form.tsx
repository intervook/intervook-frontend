import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import loginApi from '../../api/loginApi';
import { authSlice } from '../../redux-toolkit/slices/authSlice';
import Input from '../common/components/Input';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let fetchedApi = await loginApi({ email, password });
    if (fetchedApi.status === 200) {
      dispatch(authSlice.actions.login(email));
      navigate('/');
    } else {
      window.alert('등록되지 않은 이메일이거나 비밀번호가 일치하지 않습니다.');
      navigate('/join');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-[75%] h-[50%] justify-evenly">
      <div className="h-[55%]">
        <Input
          placeholder="이메일"
          name="email"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmail(true);
          }}
        />
        <Input
          placeholder="비밀번호"
          name="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setIsPassword(true);
          }}
        />
      </div>

      <button
        className={
          isEmail && isPassword
            ? 'h-[25%] pl-[10px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGreen text-[white]'
            : 'h-[25%] pl-[10px] text-[16px] border-[0.7px] rounded-[7px] bg-deepGray text-[white]'
        }
        disabled={!(isEmail && isPassword)}
      >
        로그인
      </button>
    </form>
  );
}

export default Form;

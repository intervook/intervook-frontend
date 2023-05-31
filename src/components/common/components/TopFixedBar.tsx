import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import UnLogged from './UnLogged';
import Logged from './Logged';
import Hamburger from './Hamburger';
import { authSlice } from '../../../redux-toolkit/slices/authSlice';
import Logo from '../../../assets/logo/ms-icon-70x70.png';
import getUser from '../../../api/getUser';

function TopFixedBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const isLogin = useSelector((state: any) => state.auth.isLogin);

  const moveToMainPage = () => {
    navigate('/');
  };
  const showMenu = () => {
    setMenuToggle(!menuToggle);
  };
  const showSearch = () => {
    setIsSearch(!isSearch);
  };

  useEffect(() => {
    (async function () {
      let { status } = await getUser();
      if (status === 200) {
        dispatch(authSlice.actions.login(true));
        navigate('/');
      }
    })();
  }, []);

  return (
    <>
      <div className="sticky top-0 bg-[white] z-[999] border-b-[1px] border-lightGray">
        <div className="flex w-[80%] h-[75px] m-auto items-center justify-between">
          <img src={Logo} onClick={moveToMainPage} className="cursor-pointer text-[36px]" />
          {isSearch ? (
            <div className="w-[25%] h-[60%] ml-[50%]">
              <input
                placeholder="작성자, 키워드 등을 입력해주세요."
                className="w-[100%] h-[100%] pl-[3%] bg-lightGray/20 focus-none"
              />
            </div>
          ) : null}
          <div className="flex ml-[0.5%] items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2x"
              className="text-deepGreen cursor-pointer"
              onClick={showSearch}
            />
            {isLogin ? <Logged propFunction={showMenu} /> : <UnLogged />}
          </div>
        </div>
      </div>

      {/* menuToggle이 true이면서, 스크린 크기가 min보다 작을 때 드롭다운 메뉴 보여주기 */}
      {menuToggle && <Hamburger />}
    </>
  );
}

export default TopFixedBar;

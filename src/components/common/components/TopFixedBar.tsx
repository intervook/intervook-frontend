import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import UnLogged from './UnLogged';
import Logged from './Logged';
import Hamburger from './Hamburger';
import SearchInput from '../../main/SearchInput';
import Logo from '../../../assets/logo/ms-icon-70x70.png';

function TopFixedBar() {
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

  return (
    <>
      <div className="sticky top-0 bg-[white] z-[999] border-b-[1px] border-lightGray">
        <div className="flex w-[80%] h-[75px] m-auto items-center justify-between">
          <img src={Logo} onClick={moveToMainPage} className="cursor-pointer text-[36px]" />
          {isSearch ? <SearchInput /> : null}
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

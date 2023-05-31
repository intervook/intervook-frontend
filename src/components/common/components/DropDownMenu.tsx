import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

import DropDownMenuIcon from './DropDownMenuIcon';
import logoutApi from '../../../api/logoutApi';
import { authSlice } from '../../../redux-toolkit/slices/authSlice';
import { LOGOUT } from '../../../static/constants';

function DropDownMenu() {
  const imageUrl =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(true);

  const moveToMyPage = () => {
    navigate('/myPage');
    setShowMenu(!showMenu);
  };
  const setLogoutHandler = () => {
    dispatch(authSlice.actions.logout());
    logoutApi();
    navigate('/');
  };

  return (
    <>
      {showMenu && (
        <div className="bg-bgColor border-[1px] border-lightGray">
          <div className="flex h-[70px] bg-[white] pl-[10px] items-center border-b-[1px] border-lightGray">
            <img src={imageUrl} className="w-[30px] h-[30px] rounded-[50%]" />
            <div className="ml-[3px] cursor-pointer" onClick={moveToMyPage}>
              고토리
            </div>
          </div>

          <div className="flex flex-col h-[150px] pl-[10px] pt-[10px]">
            <DropDownMenuIcon icon={faHeart} text={'좋아요'} />
            <DropDownMenuIcon icon={faBookmark} text={'북마크'} className={'ml-[2px]'} />
            <DropDownMenuIcon icon={faFolder} text={'저장한 게시물'} />
          </div>

          <button
            onClick={setLogoutHandler}
            className="float-right mt-[-19px] pb-[1px] pr-[3px] text-[12px] text-deepGray"
          >
            {LOGOUT}
          </button>
        </div>
      )}
    </>
  );
}

export default DropDownMenu;

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Icons from '../../../assets/Icons';
import IsHover from './IsHover';

function Logged({ propFunction }: any) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const moveToMyPage = () => {
    navigate('/mypage');
  };

  const showMenu = (text: any) => {
    propFunction(text);
  };

  return (
    <>
      {/* 스크린 크기가 min보다 클 때 */}
      {/* 스크린 크기가 min보다 작을 때 아이콘들을 hidden, 스크린 크기가 min보다 클 때 아이콘들 flex */}
      <div className="hidden min:flex relative">
        <Icons icon={faHeart} />
        <Icons icon={faBookmark} />

        <div
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseOut={(e: any) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsHover(false);
            }
          }}
        >
          <Icons icon={faUser} onClick={moveToMyPage} />
          {isHover && <IsHover />}
        </div>
      </div>

      {/* 스크린 크기가 min보다 작을 때 */}
      {/* 스크린 크기가 min보다 작을 때 아이콘 보여주기, 스크린 크기가 min보다 클 때 아이콘 hidden */}
      <div className="min:hidden">
        <FontAwesomeIcon
          size="2x"
          className="mr-[-10%] ml-[20px] cursor-pointer text-deepGreen"
          icon={faBars}
          onClick={showMenu}
        />
      </div>
    </>
  );
}

export default Logged;

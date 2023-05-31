import Hr from './Hr';
import kakaoLogin from '../../assets/images/kakaoLogin.png';
import naverLogin from '../../assets/images/naverLogin.png';

function SocialLogin() {
  return (
    <div className="w-[55%] mt-[5%]">
      <div className="flex mb-[2%] w-[100%] items-center justify-center">
        <Hr />
        <div className="text-[14px] px-[5px] text-deepGray text-center">간편 로그인</div>
        <Hr />
      </div>

      <a href={'/api/auth/social/kakao'}>
        <img src={kakaoLogin} alt="카카오 로그인 버튼" className="w-[88%] m-auto mb-[2%]" />
      </a>
      <a href={'/api/auth/social/naver'} className="mt-[2%]">
        <img src={naverLogin} alt="네이버 로그인 버튼" className="w-[50%] m-auto" />
      </a>
    </div>
  );
}

export default SocialLogin;

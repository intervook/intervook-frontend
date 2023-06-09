import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import BgGreenBtn from '../components/common/components/BgGreenBtn';

function QuizDetailsPage() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const moveToBackPage = () => {
    navigate(-1);
  };
  const showAnswer = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="w-[80%] m-auto mt-[3%]">
      <FontAwesomeIcon
        size="2x"
        className="aspect-square cursor-pointer"
        icon={faArrowLeft}
        onClick={moveToBackPage}
      />
      <h1 className="text-[45px]">문제 제목</h1>

      <div className="my-[2%] p-[2%] h-[50vh] shadow-md bg-lightGray/10">
        <h1 className="text-2xl font-semibold">문제 설명</h1>
        <div className="h-[67%] pt-[3%]">주절주절</div>
        <input
          placeholder={'답변을 입력해주세요.'}
          className="w-[100%] h-[15%] mt-[2%] px-[1%] border-[1px] border-lightGray outline-0"
        />
      </div>
      <BgGreenBtn name="정답 확인" className="float-right" onClick={showAnswer} />
      {modalIsOpen ? (
        <Modal
          isOpen={true}
          ariaHideApp={false}
          className="w-[50%] h-[58vh] mt-[10%] m-auto bg-bgColor text-lg rounded-[10px] drop-shadow-lg"
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h1 className="flex justify-center h-[20%] items-center text-5xl bg-lightGreen rounded-t-[10px]">
            정답
          </h1>
          <div className="p-[5%]">정답은 ...입니다</div>
        </Modal>
      ) : null}
    </div>
  );
}

export default QuizDetailsPage;

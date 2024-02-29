import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Completed from '../../assets/icons/completed.svg';
import Close from '../../assets/icons/close.svg';

function Toast({ showToast, setShowToast }) {
  // Toast 5초뒤에 꺼지는 코드
  // const [showToast, setShowToast] = useState(false);

  // useEffect(() => {
  //   let timeout;

  //   if (showToast) {
  //     timeout = setTimeout(() => {
  //       setShowToast(false);
  //     }, 5000);
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [showToast]);

  return (
    <ContainerDiv>
      <ToastBoxDiv $showToast={showToast}>
        <ToastCompleted>
          <img src={Completed} alt="성공 아이콘" />
          <span className="CompletedText">URL이 복사 되었습니다.</span>
        </ToastCompleted>
        <button type="button" onClick={() => setShowToast(false)}>
          <img src={Close} alt="닫기 아이콘" />
        </button>
      </ToastBoxDiv>
    </ContainerDiv>
  );
}

Toast.propTypes = {
  showToast: PropTypes.bool.isRequired,
  setShowToast: PropTypes.func.isRequired,
};

export default Toast;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const timer = keyframes`
  from{
    width: 100%;
  }to{
    width: 0%;
  }
`;

const timerAnimation = css`
  animation: ${timer} 5s linear;
`;

const ToastBoxDiv = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 524px;
  height: 64px;
  padding: 19px 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ $showToast }) => ($showToast ? '1' : '0')};
  transform: translateY(${({ $showToast }) => ($showToast ? '-70px' : '0px')});
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 0;
    background-color: #40f467;
    border-radius: 0 0 8px 8px;
    ${({ $showToast }) => ($showToast ? timerAnimation : '')};
  }
`;

const ToastCompleted = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .CompletedText {
    color: var(--white, #fff);
    font-size: var(--font16, 1.6rem);
    font-weight: var(--regular, 400);
    line-height: 26px;
    letter-spacing: -0.16px;
  }
`;

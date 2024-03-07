import styled, { keyframes } from 'styled-components';

export const LandingSkeltonContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const loadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(200%);
  }
`;

const LandingSkeltonDiv = styled.div`
  height: 324px;
  border: 1px solid
    ${({ theme }) => (theme.mode === 'light' ? '#ededed' : '#24262b')};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -180px;
    width: 1000px;
    height: 100%;
    background: ${({ theme }) =>
      theme.mode === 'light'
        ? 'linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2)'
        : 'linear-gradient(to right, #333, #555, #333)'};
    animation: ${loadingAnimation} 2s infinite linear;
  }
`;

export default LandingSkeltonDiv;

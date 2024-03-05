import styled from 'styled-components';
import arrowTop from '../../assets/icons/arrowTop.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

export const SelectBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.2rem solid
    ${({ $isOpen }) => ($isOpen ? `var(--gray500)` : `var(--gray300)`)};

  &:hover {
    border: 0.2rem solid var(--gray500);
  }
`;

export const SelectSpan = styled.span`
  color: var(--gray500);
  font-family: ${({ $fontValue }) => `${$fontValue}`};
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;
`;

export const ArrowBtn = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: ${({ $isOpen }) =>
    $isOpen ? `url(${arrowTop})` : `url(${arrowDown})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SelectOptionDiv = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10.9rem;
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);
  background-color: var(--white);
  z-index: 1;
`;

export const SelectOptionBtn = styled.button`
  width: 31.6rem;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  color: var(--gray900);
  font-family: ${({ $item }) => `${$item}`};
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;

  &:hover {
    background-color: var(--gray100);
  }
`;

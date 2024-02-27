import React from 'react';
import styled from 'styled-components';
import arrowDown from '../../assets/icons/arrowDown.svg';

function Select() {
  return (
    <>
      <SelectBtn type="button">
        <span>지인</span>
        <div />
      </SelectBtn>
      <SelectOption>
        <li>친구</li>
        <li>지인</li>
        <li>동료</li>
        <li>가족</li>
      </SelectOption>
    </>
  );
}

export default Select;

const SelectBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);

  & > span {
    color: var(--gray500);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;
  }

  & > div {
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${arrowDown});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    border: 0.1rem solid var(--gray500);
  }
`;

const SelectOption = styled.ul`
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

  & > li {
    width: 31.6rem;
    display: flex;
    align-items: center;
    padding: 1.2rem 1.6rem;
    cursor: pointer;
    color: var(--gray900);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;

    &:hover {
      background-color: var(--gray100);
    }
  }
`;

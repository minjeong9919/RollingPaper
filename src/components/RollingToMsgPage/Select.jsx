import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowDown from '../../assets/icons/arrowDown.svg';

function Select({ SelectList, isOpen, setIsOpen }) {
  const [value, setValue] = useState(null);

  const isOpenHandle = () => {
    setIsOpen(!isOpen);
  };

  const onItemClickHandle = (item) => {
    setValue(item);
    setIsOpen(false);
  };

  return (
    <>
      <SelectBtn type="button" onClick={isOpenHandle}>
        <span>{value || '선택하세요'}</span>
        <div />
      </SelectBtn>
      {isOpen && (
        <SelectOption>
          {SelectList.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => onItemClickHandle(item)}
            >
              {item}
            </button>
          ))}
        </SelectOption>
      )}
    </>
  );
}

Select.propTypes = {
  SelectList: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

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

const SelectOption = styled.div`
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

  & > button {
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

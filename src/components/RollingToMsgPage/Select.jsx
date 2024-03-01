import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowDown from '../../assets/icons/arrowDown.svg';
import arrowTop from '../../assets/icons/arrowTop.svg';

function Select({ SelectList, isOpen, setIsOpen, value, setValue, onChange }) {
  const isOpenHandle = () => {
    setIsOpen(!isOpen);
  };

  const onItemClickHandle = (item) => {
    setValue(item);
    onChange(item);
    setIsOpen(false);
  };

  const filterValue = SelectList.filter(
    (v) => v.includes('지인') || v.includes('Noto Sans'),
  );

  return (
    <>
      <SelectBtn type="button" $isOpen={isOpen} onClick={isOpenHandle}>
        <span>{value || filterValue}</span>
        <ArrowBtn $isOpen={isOpen} />
      </SelectBtn>
      {isOpen && (
        <SelectOptionDiv>
          {SelectList.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => onItemClickHandle(item)}
            >
              {item}
            </button>
          ))}
        </SelectOptionDiv>
      )}
    </>
  );
}

Select.propTypes = {
  SelectList: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;

const SelectBtn = styled.button`
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

  & > span {
    color: var(--gray500);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;
  }
`;

const ArrowBtn = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: ${({ $isOpen }) =>
    $isOpen ? `url(${arrowTop})` : `url(${arrowDown})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const SelectOptionDiv = styled.div`
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

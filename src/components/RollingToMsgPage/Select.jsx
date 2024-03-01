import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectBtn,
  ArrowBtn,
  SelectOptionDiv,
} from '../../styles/RollingToMsgPage/Select.style';

function Select({ SelectList, isOpen, setIsOpen, value, onChange }) {
  const isOpenHandle = () => {
    setIsOpen(!isOpen);
  };

  const onItemClickHandle = (item) => {
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
  onChange: PropTypes.func.isRequired,
};

export default Select;

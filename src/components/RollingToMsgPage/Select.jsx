import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectBtn,
  ArrowBtn,
  SelectOptionDiv,
  SelectOptionBtn,
  SelectSpan,
} from '../../styles/RollingToMsgPage/Select.style';
import { fontsList } from './SelectList';

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

  const fontValue = fontsList.filter((v) => v === value);

  return (
    <>
      <SelectBtn type="button" $isOpen={isOpen} onClick={isOpenHandle}>
        <SelectSpan $fontValue={fontValue}>{value || filterValue}</SelectSpan>
        <ArrowBtn $isOpen={isOpen} />
      </SelectBtn>
      {isOpen && (
        <SelectOptionDiv>
          {SelectList.map((item) => (
            <SelectOptionBtn
              type="button"
              key={item}
              item={item}
              onClick={() => onItemClickHandle(item)}
            >
              {item}
            </SelectOptionBtn>
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

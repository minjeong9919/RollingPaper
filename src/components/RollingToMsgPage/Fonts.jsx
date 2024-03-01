import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from './Select';
import { fontsList } from './SelectList';

function Fonts({
  isOpenFont,
  setIsOpenFont,
  isOpenRelationship,
  fontpValue,
  onFontValueHandle,
}) {
  return (
    <FontsContentDiv $isOpen={(isOpenRelationship, isOpenFont)}>
      <span>폰트 선택</span>
      <Select
        SelectList={fontsList}
        isOpen={isOpenFont}
        setIsOpen={setIsOpenFont}
        value={fontpValue}
        onChange={onFontValueHandle}
      />
    </FontsContentDiv>
  );
}

Fonts.propTypes = {
  isOpenFont: PropTypes.bool.isRequired,
  setIsOpenFont: PropTypes.func.isRequired,
  isOpenRelationship: PropTypes.bool.isRequired,
  fontpValue: PropTypes.string.isRequired,
  onFontValueHandle: PropTypes.func.isRequired,
};

export default Fonts;

const FontsContentDiv = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '1.2rem')};
  gap: 1.2rem;

  @media (max-width: 768px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '0.2rem')};
  }

  @media (max-width: 360px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '20.6rem' : '20.6rem')};
  }

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;

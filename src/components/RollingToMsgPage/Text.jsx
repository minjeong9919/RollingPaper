import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextEditor from './TextEditor';

function Text({ quillValue, onQuillValueChangeHandle }) {
  return (
    <WriteContentDiv>
      <span>내용을 입력해 주세요</span>
      <div>
        <TextEditor
          quillValue={quillValue}
          onChange={onQuillValueChangeHandle}
        />
      </div>
    </WriteContentDiv>
  );
}

Text.propTypes = {
  quillValue: PropTypes.string.isRequired,
  onQuillValueChangeHandle: PropTypes.func.isRequired,
};

export default Text;

const WriteContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }

  & > div {
    width: 72rem;
    height: 26rem;

    @media (max-width: 360px) {
      width: 32rem;
    }
  }
`;

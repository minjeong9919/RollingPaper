import React from 'react';
import PropTypes from 'prop-types';
import TextEditor from './TextEditor';
import { WriteContentDiv } from '../../styles/RollingToMsgPage/Text.style';

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

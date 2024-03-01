import React from 'react';
import PropTypes from 'prop-types';
import {
  InputNameContentDiv,
  NameInput,
} from '../../styles/RollingToMsgPage/InputName.style';

function InputName({ setName, errorMsg, setErrorMsg }) {
  const onNameChangeHandle = (e) => {
    setName(e.target.value);
  };

  const onNameFocusHandle = () => {
    setName('');
    setErrorMsg('');
  };

  const onNameBlurHandle = (e) => {
    if (e.target.value === '') {
      setErrorMsg('값을 입력해 주세요.');
    } else {
      setErrorMsg('');
    }
  };

  return (
    <InputNameContentDiv>
      <label htmlFor="InputFrom">From.</label>
      <NameInput
        id="InputFrom"
        type="text"
        placeholder="이름을 입력해 주세요."
        onChange={onNameChangeHandle}
        onFocus={onNameFocusHandle}
        onBlur={onNameBlurHandle}
        $errorMsg={errorMsg}
      />
      {errorMsg && <span>{errorMsg}</span>}
    </InputNameContentDiv>
  );
}

InputName.propTypes = {
  setName: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,
  setErrorMsg: PropTypes.func.isRequired,
};

export default InputName;

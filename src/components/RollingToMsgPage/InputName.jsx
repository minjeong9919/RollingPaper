import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const InputNameContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > label {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }

  & > span {
    color: var(--error);
    margin-top: -0.6rem;
    font-size: var(--font14);
    font-weight: var(--regular);
    line-height: normal;
  }
`;

const NameInput = styled.input`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${({ $errorMsg }) => ($errorMsg === '' ? 'var(--gray300)' : 'var(--error)')};
  background-color: var(--white);
  color: var(--gray500, #555555);
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;

  &:focus {
    border: 0.1rem solid var(--gray300);
  }

  @media (max-width: 360px) {
    width: 32rem;
  }
`;

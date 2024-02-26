import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function InputComponent({
  value,
  setValue,
  touched,
  setTouched,
  placeholder,
  id,
}) {
  InputComponent.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    setTouched: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  const isValid = value.length > 0;

  const onBlurHandle = () => {
    if (!value) {
      setTouched(true);
    }
  };

  const onFocusHandle = () => {
    setTouched(false);
  };

  const onChangeHandle = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
  };

  return (
    <InputWrapper>
      <label htmlFor={id}>{id}.</label>
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        onFocus={onFocusHandle}
        isTouched={touched}
        isValid={isValid}
      />
      <WarningText isVisible={touched && !isValid}>
        값을 입력해주세요
      </WarningText>
    </InputWrapper>
  );
}

export default InputComponent;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  gap: 12px;
  label {
    color: var(--gray-900, #181818);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0.24px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
  background: var(--white, #fff);
  border: ${(props) =>
    props.isTouched && !props.isValid ? '1px solid #dc3a3a' : '1px solid #ccc'};
  &:focus {
    border: 2px solid #555;
  }
`;

const WarningText = styled.div`
  color: #dc3a3a;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

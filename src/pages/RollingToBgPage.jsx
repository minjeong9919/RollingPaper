import React, { useState } from 'react';
import styled from 'styled-components';
import InputComponent from '../components/InputComponent';
import Toggle from '../components/Toggle';

function RollingToBgPage() {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [toggleValue, setToggleValue] = useState('color');

  const onToggleHandle = (value) => {
    setToggleValue(value);
  };

  return (
    <Wrapper>
      <Header>RollingToBgPage</Header>
      <FormWrapper>
        <InputComponent
          value={name}
          setValue={setName}
          touched={nameTouched}
          setTouched={setNameTouched}
          placeholder="받는 사람 이름을 입력해 주세요"
          id="To"
        />
        <Toggle onToggle={onToggleHandle} toggleValue={toggleValue} />
        <SubmitButton type="submit">생성하기</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
}

export default RollingToBgPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Header = styled.h1`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  justify-content: center;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 786px;
  background-color: aliceblue;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background-color: #9935ff;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`;

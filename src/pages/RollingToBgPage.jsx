import React, { useState } from 'react';
import styled from 'styled-components';
import InputComponent from '../components/InputComponent';

function RollingToBgPage() {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  // const [bg, setBg] = useState('');
  // const [bgTouched, setBgTouched] = useState(false);

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
        <button type="submit">생성하기</button>
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
  align-items: center;
  width: 786px;
  background-color: aliceblue;
`;

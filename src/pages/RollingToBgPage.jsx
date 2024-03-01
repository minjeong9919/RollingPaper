import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from '../components/InputComponent';
import Toggle from '../components/Toggle';
import getBgImg from '../apis/BgImg';
import BgList from '../components/BgList';

function RollingToBgPage() {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [toggleValue, setToggleValue] = useState('color');
  const [loadingError, setLoadingError] = useState(null);
  const [items, setItems] = useState([]);
  const color = ['beige', 'purple', 'blue', 'green'];
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [selectedImg, setSelectedImg] = useState(' ');

  const navigate = useNavigate();

  const onSelectColorHandle = (value) => {
    setSelectedColor(value);
  };

  const onSelectImgHandle = (value) => {
    setSelectedImg(value);
  };

  const onLoadHandle = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getBgImg();
    } catch (error) {
      setLoadingError(error);
      return;
    }
    const { imageUrls } = result;
    setItems(imageUrls);
  };

  useEffect(() => {
    onLoadHandle();
  }, []);

  const onToggleHandle = (value) => {
    setToggleValue(value);
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    const data = {
      team: '4-3',
      name,
      backgroundColor: selectedColor,
      backgroundImageURL: selectedImg,
    };
    try {
      const response = await fetch(
        'https://rolling-api.vercel.app/4-3/recipients/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) {
        navigate.push('/rolling');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Header>RollingToBgPage</Header>
      <FormWrapper onSubmit={onSubmitHandle}>
        <InputComponent
          value={name}
          setValue={setName}
          touched={nameTouched}
          setTouched={setNameTouched}
          placeholder="받는 사람 이름을 입력해 주세요"
          id="To"
        />
        <Toggle onToggle={onToggleHandle} toggleValue={toggleValue} />
        {toggleValue === 'color' ? (
          <BgList
            images={color}
            onSelectColor={onSelectColorHandle}
            onSelectImg={onSelectImgHandle}
          />
        ) : (
          <BgList
            images={items}
            onSelectColor={onSelectColorHandle}
            onSelectImg={onSelectImgHandle}
            selectedColor={selectedColor}
          />
        )}
        {loadingError && <div>에러가 발생했습니다.</div>}
        <SubmitButton type="submit">생성하기</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
}

export default RollingToBgPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-top: 122px;
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

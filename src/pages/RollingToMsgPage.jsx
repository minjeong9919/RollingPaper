import React from 'react';
import styled from 'styled-components';
import profile from '../assets/icons/profile.svg';
import arrowDown from '../assets/icons/arrowDown.svg';

function RollingToMsgPage() {
  return (
    <MsgPageContainer>
      <MsgPageForm>
        <InputNameContent>
          <label htmlFor="InputFrom">From.</label>
          <input
            id="InputFrom"
            type="text"
            placeholder="이름을 입력해 주세요."
          />
        </InputNameContent>
        <ProfileImgContent>
          <span>프로필 이미지</span>
          <ImgDiv>
            <ProfileIc />
            <ImgListDiv>
              <span>프로필 이미지를 선택해주세요!</span>
              <div />
            </ImgListDiv>
          </ImgDiv>
        </ProfileImgContent>
        <RelationshipContent>
          <span>상대와의 관계</span>
          <SelectBtn type="button">
            <span>지인</span>
            <button type="button" aria-label="SeleteBtn" />
          </SelectBtn>
        </RelationshipContent>
        <WriteContent>
          <span>내용을 입력해 주세요</span>
          <div>컨텐츠</div>
        </WriteContent>
        <FontsContent>
          <span>폰트 선택</span>
          <SelectBtn type="button">
            <span>Noto Sans</span>
            <button type="button" aria-label="SeleteBtn" />
          </SelectBtn>
        </FontsContent>
      </MsgPageForm>
      <button type="submit">생성하기</button>
    </MsgPageContainer>
  );
}

export default RollingToMsgPage;

const MsgPageContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 116.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.2rem;

  & > button {
    width: 72rem;
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.4rem 2.4rem;
    border-radius: 1.2rem;
    background-color: var(--purple600);
    color: var(--white);
    font-size: var(--font18);
    font-weight: var(--bold);
    line-height: 1.55556;
    letter-spacing: -0.018rem;
  }
`;

const MsgPageForm = styled.form`
  width: 72rem;
  display: flex;
  flex-direction: column;
  padding-top: 4.7rem;
  gap: 5rem;
`;

const InputNameContent = styled.div`
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

  & > input {
    width: 72rem;
    display: flex;
    align-items: center;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid var(--gray300);
    background-color: var(--white);
    color: var(--gray500);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;
  }
`;

const ProfileImgContent = styled.div`
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
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const ProfileIc = styled.div`
  width: 8rem;
  height: 8rem;
  background-image: url(${profile});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImgListDiv = styled.div`
  width: calc(100% - 11.2rem);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > span {
    color: var(--gray500);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;
  }

  & > div {
    width: 5.6rem;
    height: 5.6rem;
    background-image: url(${profile});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const RelationshipContent = styled.div`
  width: 32rem;
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
`;

const SelectBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray300);

  & > span {
    color: var(--gray500);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;
  }

  & > button {
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${arrowDown});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const WriteContent = styled.div`
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem 0.1rem 1.6rem;
  }
`;

const FontsContent = styled.div`
  width: 32rem;
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
`;

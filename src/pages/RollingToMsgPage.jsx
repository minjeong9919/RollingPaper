import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextEditor from '../components/RollingToMsgPage/TextEditor';
import Select from '../components/RollingToMsgPage/Select';
import {
  fontsList,
  relationshList,
} from '../components/RollingToMsgPage/SelectList';
import getProfileImg from '../apis/ProfileImgApi';
import ImgList from '../components/RollingToMsgPage/ImgList';

function RollingToMsgPage() {
  const [isOpenRelationsh, setIsOpenRelationsh] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [profileImg, setProfileImg] = useState([]);

  const loadProfileImgHandle = async () => {
    const { imageUrls } = await getProfileImg();
    setProfileImg([...imageUrls]);
  };

  useEffect(() => {
    loadProfileImgHandle();
  }, []);

  return (
    <MsgPageContainerDiv>
      <MsgPageForm>
        <InputNameContentDiv>
          <label htmlFor="InputFrom">From.</label>
          <input
            id="InputFrom"
            type="text"
            placeholder="이름을 입력해 주세요."
          />
        </InputNameContentDiv>
        <ProfileImgContentDiv>
          <span>프로필 이미지</span>
          <ImgList profileImg={profileImg} />
        </ProfileImgContentDiv>
        <RelationshipContentDiv>
          <span>상대와의 관계</span>
          <Select
            SelectList={relationshList}
            isOpen={isOpenRelationsh}
            setIsOpen={setIsOpenRelationsh}
          />
        </RelationshipContentDiv>
        <WriteContentDiv>
          <span>내용을 입력해 주세요</span>
          <div>
            <TextEditor />
          </div>
        </WriteContentDiv>
        <FontsContentDiv $isOpen={(isOpenRelationsh, isOpenFont)}>
          <span>폰트 선택</span>
          <Select
            SelectList={fontsList}
            isOpen={isOpenFont}
            setIsOpen={setIsOpenFont}
          />
        </FontsContentDiv>
      </MsgPageForm>
      <button type="submit">생성하기</button>
    </MsgPageContainerDiv>
  );
}

export default RollingToMsgPage;

const MsgPageContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  gap: 6.2rem;

  @media (max-width: 768px) {
    padding-bottom: 2.4rem;
    gap: 5.2rem;
  }

  @media (max-width: 360px) {
    gap: 18.2rem;
  }

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

    @media (max-width: 360px) {
      width: 32rem;
    }
  }
`;

const MsgPageForm = styled.form`
  width: 72rem;
  display: flex;
  flex-direction: column;
  padding-top: 4.7rem;
  gap: 5rem;

  @media (max-width: 768px) {
    padding-top: 4.9rem;
  }

  @media (max-width: 360px) {
    width: 32rem;
    padding-top: 5rem;
  }
`;

const InputNameContentDiv = styled.div`
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
    border: 0.1rem solid var(--gray300);
    background-color: var(--white);
    color: var(--gray500, #555555);
    font-size: var(--font16);
    font-weight: var(--regular);
    line-height: 1.625;
    letter-spacing: -0.016rem;

    @media (max-width: 360px) {
      width: 32rem;
    }
  }
`;

const ProfileImgContentDiv = styled.div`
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

const RelationshipContentDiv = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.2rem;

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;

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

const FontsContentDiv = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '')};
  gap: 1.2rem;

  @media (max-width: 360px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '7rem' : '0')};
  }

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;

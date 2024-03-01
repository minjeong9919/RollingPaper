import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextEditor from '../components/RollingToMsgPage/TextEditor';
import Select from '../components/RollingToMsgPage/Select';
import {
  fontsList,
  relationshList,
} from '../components/RollingToMsgPage/SelectList';
import ImgList from '../components/RollingToMsgPage/ImgList';
import getProfileImg from '../apis/ProfileImgApi';
import { getRecipients, postFormData } from '../apis/api';

function RollingToMsgPage() {
  const [isOpenRelationship, setIsOpenRelationship] = useState(false);
  const [isOpenFont, setIsOpenFont] = useState(false);
  const [profileImg, setProfileImg] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [image, setImage] = useState('');
  const [relationshipValue, setRelationshipValue] = useState('지인');
  const [quillValue, setQuillValue] = useState('');
  const [fontpValue, setFontValue] = useState('Noto Sans');
  const navigate = useNavigate();

  const loadProfileImgHandle = async () => {
    const { imageUrls } = await getProfileImg();
    setProfileImg([...imageUrls]);
  };

  const loadRecipients = async () => {
    const { results } = await getRecipients();
    setId(results[0].id);
  };
  console.log(quillValue);
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const formData = {
      team: '4-3',
      recipientId: id,
      sender: name,
      profileImageURL: image,
      relationship: relationshipValue,
      content: quillValue,
      font: fontpValue,
    };

    const response = await postFormData(formData, id);
    navigate(`/post/${id}/`);
    return response;
  };

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

  const onImgHandle = (value) => {
    setImage(value);
  };

  const onRelationshipValueHandle = (value) => {
    setRelationshipValue(value);
  };

  const onQuillValueChangeHandle = (value) => {
    setQuillValue(value);
  };

  const onFontValueHandle = (value) => {
    setFontValue(value);
  };

  useEffect(() => {
    loadProfileImgHandle();
    loadRecipients();
  }, []);

  return (
    <MsgPageContainerDiv>
      <MsgPageForm onSubmit={onSubmitHandle}>
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
        <ProfileImgContentDiv>
          <span>프로필 이미지</span>
          <ImgList
            profileImg={profileImg}
            image={image}
            setImage={setImage}
            onChange={onImgHandle}
          />
        </ProfileImgContentDiv>
        <RelationshipContentDiv>
          <span>상대와의 관계</span>
          <Select
            SelectList={relationshList}
            isOpen={isOpenRelationship}
            setIsOpen={setIsOpenRelationship}
            value={relationshipValue}
            setValue={setRelationshipValue}
            onChange={onRelationshipValueHandle}
          />
        </RelationshipContentDiv>
        <WriteContentDiv>
          <span>내용을 입력해 주세요</span>
          <div>
            <TextEditor
              quillValue={quillValue}
              setQuillValue={setQuillValue}
              onChange={onQuillValueChangeHandle}
            />
          </div>
        </WriteContentDiv>
        <FontsContentDiv $isOpen={(isOpenRelationship, isOpenFont)}>
          <span>폰트 선택</span>
          <Select
            SelectList={fontsList}
            isOpen={isOpenFont}
            setIsOpen={setIsOpenFont}
            value={fontpValue}
            setValue={setFontValue}
            onChange={onFontValueHandle}
          />
        </FontsContentDiv>
        <SubmitBtn type="submit" disabled={!name || !quillValue}>
          생성하기
        </SubmitBtn>
      </MsgPageForm>
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

  @media (max-width: 768px) {
    padding-bottom: 2.4rem;
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

  & > span {
    color: var(--error);
    margin-top: -0.6rem;
    font-size: var(--font14);
    font-weight: var(--regular);
    line-height: normal;
  }
`;

const NameInput = styled.input`
  width: 72rem;
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
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '1.2rem')};
  gap: 1.2rem;

  @media (max-width: 768px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '25rem' : '0.2rem')};
  }

  @media (max-width: 360px) {
    padding-bottom: ${({ $isOpen }) => ($isOpen ? '20.6rem' : '20.6rem')};
  }

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;

const SubmitBtn = styled.button`
  width: 72rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({ disabled }) =>
    disabled ? 'var(--gray300)' : 'var(--purple600)'};
  color: var(--white);
  font-size: var(--font18);
  font-weight: var(--bold);
  line-height: 1.55556;
  letter-spacing: -0.018rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:focus {
    background-color: ${({ disabled }) =>
      disabled ? 'var(--gray300)' : 'var(--purple800)'};
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'var(--gray300)' : 'var(--purple700)'};
  }

  @media (max-width: 360px) {
    width: 32rem;
  }
`;

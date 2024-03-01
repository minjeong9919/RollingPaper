import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getProfileImg, getRecipients, postFormData } from '../apis/api';
import InputName from '../components/RollingToMsgPage/InputName';
import ProfileImg from '../components/RollingToMsgPage/ProfileImg';
import Relationship from '../components/RollingToMsgPage/Relationship';
import Fonts from '../components/RollingToMsgPage/Fonts';
import Text from '../components/RollingToMsgPage/Text';

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
        <InputName
          setName={setName}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
        />
        <ProfileImg profileImg={profileImg} image={image} setImage={setImage} />
        <Relationship
          isOpenRelationship={isOpenRelationship}
          setIsOpenRelationship={setIsOpenRelationship}
          relationshipValue={relationshipValue}
          onRelationshipValueHandle={onRelationshipValueHandle}
        />
        <Text
          quillValue={quillValue}
          onQuillValueChangeHandle={onQuillValueChangeHandle}
        />
        <Fonts
          isOpenFont={isOpenFont}
          setIsOpenFont={setIsOpenFont}
          isOpenRelationship={isOpenRelationship}
          fontpValue={fontpValue}
          onFontValueHandle={onFontValueHandle}
        />
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

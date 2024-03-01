import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImgList from './ImgList';

function ProfileImg({ profileImg, image, setImage }) {
  const onImgHandle = (value) => {
    setImage(value);
  };

  return (
    <ProfileImgContentDiv>
      <span>프로필 이미지</span>
      <ImgList profileImg={profileImg} image={image} onChange={onImgHandle} />
    </ProfileImgContentDiv>
  );
}

ProfileImg.propTypes = {
  profileImg: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  image: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default ProfileImg;

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

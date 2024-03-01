import React from 'react';
import PropTypes from 'prop-types';
import ImgList from './ImgList';
import { ProfileImgContentDiv } from '../../styles/RollingToMsgPage/ProfileImg.style';

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

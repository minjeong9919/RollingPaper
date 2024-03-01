import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ImageDiv,
  ImgDiv,
  ImgListDiv,
  ListContentDiv,
  ProfileIc,
} from '../../styles/RollingToMsgPage/ImgList.style';

function ImgList({ profileImg, image, onChange }) {
  const onImageClickHandle = (item) => {
    onChange(item);
  };

  useEffect(() => {
    if (!image && profileImg.length > 0) {
      onChange(profileImg[0]);
    }
  }, [profileImg]);

  return (
    <ImgDiv>
      <ProfileIc $image={image} />
      <ImgListDiv>
        <span>프로필 이미지를 선택해주세요!</span>
        <ListContentDiv>
          {profileImg.slice(1).map((item) => (
            <ImageDiv
              key={item}
              data={item}
              onClick={() => onImageClickHandle(item)}
            />
          ))}
        </ListContentDiv>
      </ImgListDiv>
    </ImgDiv>
  );
}

ImgList.propTypes = {
  profileImg: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImgList;

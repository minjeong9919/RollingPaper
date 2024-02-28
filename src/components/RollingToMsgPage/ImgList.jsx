import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import profile from '../../assets/icons/profile.svg';

function ImgList({ profileImg }) {
  const [image, setImage] = useState(null);

  const onImageClickHandle = (item) => {
    setImage(item);
  };
  return (
    <ImgDiv>
      <ProfileIc image={image} />
      <ImgListDiv>
        <span>프로필 이미지를 선택해주세요!</span>
        <ListContentDiv>
          {profileImg.map((item) => (
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
};

export default ImgList;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const ProfileIc = styled.div`
  width: 8rem;
  height: 8rem;
  background-image: ${(props) => `url(${props.image || profile})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10rem;
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
`;

const ListContentDiv = styled.div`
  width: 60.5rem;
  height: 5.6rem;
  display: flex;
  gap: 0.4rem;

  @media (max-width: 360px) {
    width: 20.8rem;
    height: 8.4rem;
    flex-wrap: wrap;
    gap: 0.4rem 0.2rem;
  }
`;

const ImageDiv = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  background-image: ${(props) => `url(${props.data || profile})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10rem;
  cursor: pointer;

  @media (max-width: 360px) {
    width: 4rem;
    height: 4rem;
  }
`;

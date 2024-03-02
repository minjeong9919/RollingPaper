import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import senderProfileImage from '../../../assets/images/senderProfileImage.png';

function ProfileFrame({ type, left, number, profileImgURL }) {
  return (
    <ContainerDiv $left={left} type={type}>
      <NumberP type={type}>+{number}</NumberP>
      <img src={profileImgURL || senderProfileImage} alt="profile" />
    </ContainerDiv>
  );
}

ProfileFrame.propTypes = {
  left: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.number,
  profileImgURL: PropTypes.string,
};

ProfileFrame.defaultProps = {
  left: 'auto',
  type: '',
  number: 0,
  profileImgURL: '',
};

const ContainerDiv = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  border: ${({ type }) =>
    type === 'image' ? '2px solid #FFF' : '1px solid #e3e3e3'};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${({ $left }) => $left || '0px'};
  background-color: var(--white);

  & > img {
    display: ${({ type }) => (type === 'image' ? 'block' : 'none')};
    width: 200%;
    height: 200%;
  }
`;

const NumberP = styled.p`
  display: ${({ type }) => (type === 'number' ? 'block' : 'none')};
  font-family: Pretendard;
  font-size: 12px;
  color: #484848;
  font-weight: 500;
`;

export default ProfileFrame;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getBadgeBgColor, getBadgeTextColor } from '../../utils/BadgeColor';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

function RollingCard({
  sender,
  relationship,
  createdAt,
  profileImageURL,
  content,
  onClick,
  $isEditMode,
}) {
  const year = createdAt.substring(0, 4);
  const month = createdAt.substring(5, 7);
  const day = createdAt.substring(8, 10);
  // const hour = createdAt.substring(11, 13);
  // const minute = createdAt.substring(14, 16);
  const date = `${year}.${month}.${day}`;

  return (
    <ContainerDiv onClick={() => onClick()}>
      <SenderFrameDiv>
        <ProfileImageDiv>
          <img src={profileImageURL} alt={sender} />
        </ProfileImageDiv>
        <SenderInfoDiv>
          <div>
            <span>From.</span>
            <span className="name">{sender}</span>
          </div>
          <BadgeDiv badge={relationship}>{relationship}</BadgeDiv>
        </SenderInfoDiv>
        <DeleteIconBtn $isEditMode={$isEditMode}>
          <DeleteIcon />
        </DeleteIconBtn>
      </SenderFrameDiv>
      <ContentDiv>
        <p>{content}</p>
        <p className="date">{date}</p>
      </ContentDiv>
    </ContainerDiv>
  );
}

RollingCard.propTypes = {
  sender: PropTypes.string,
  relationship: PropTypes.string,
  createdAt: PropTypes.string,
  profileImageURL: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  $isEditMode: PropTypes.bool,
};

RollingCard.defaultProps = {
  sender: '',
  relationship: '',
  createdAt: '',
  profileImageURL: '',
  content: '',
  onClick: null,
  $isEditMode: false,
};

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const SenderFrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-top: 4px;
`;

const ProfileImageDiv = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid var(--gray200);
  background: var(--white);

  & > img {
    width: 108px;
    height: 108px;
  }
`;

const SenderInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > div > span {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }

  & > div > .name {
    font-weight: 700;
    margin-left: 6px;
  }
`;

const BadgeDiv = styled.div`
  width: max-content;
  padding: 0px 8px;
  border-radius: 4px;
  background-color: ${({ badge }) => getBadgeBgColor(badge)};
  color: ${({ badge }) => getBadgeTextColor(badge)};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  margin-top: 16px;

  & > p {
    height: 110px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--gray600);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      height: 80px;
      -webkit-line-clamp: 3;
    }
    @media (max-width: 360px) {
      height: 56px;
      -webkit-line-clamp: 2;
    }
  }

  & > .date {
    height: auto;
    margin: 0px;
    color: var(--gray400);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.06px;
  }
`;

const DeleteIconBtn = styled.button`
  visibility: ${({ $isEditMode }) => ($isEditMode ? 'visible' : 'hidden')};
  width: 40px;
  height: 40px;
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
  margin-left: auto;
`;

export default RollingCard;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getBadgeBgColor, getBadgeTextColor } from '../../utils/BadgeColor';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

function RollingCard({
  name = '',
  badge = '',
  date = '',
  imgUrl = '',
  content = '',
  onClick = null,
}) {
  return (
    <ContainerDiv onClick={() => onClick()}>
      <SenderFrameDiv>
        <ProfileImageDiv>
          <img src={imgUrl} alt={name} />
        </ProfileImageDiv>
        <SenderInfoDiv>
          <div>
            <span>From.</span>
            <span className="name">{name}</span>
          </div>
          <BadgeDiv badge={badge}>{badge}</BadgeDiv>
        </SenderInfoDiv>
        <DeleteIconDiv>
          <DeleteIcon />
        </DeleteIconDiv>
      </SenderFrameDiv>
      <ContentDiv>
        <p>{content}</p>
        <p className="date">{date}</p>
      </ContentDiv>
    </ContainerDiv>
  );
}

RollingCard.propTypes = {
  name: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 24px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const SenderFrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 28px 0px 15px;
`;

const ProfileImageDiv = styled.div`
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
      font-size: 18px;
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
  height: 106px;
  flex-shrink: 0;
  margin: 16px auto;

  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 최대 라인 수 지정 (3줄 기준) */
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
  }

  & > .date {
    color: var(--gray400);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.06px;
  }
`;

const DeleteIconDiv = styled.div`
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

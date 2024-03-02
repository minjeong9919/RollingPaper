import React from 'react';
import { styled, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { getBadgeBgColor, getBadgeTextColor } from '../../utils/BadgeColor';

function DetailCard({ $visible, onClick = null, card }) {
  let date = '';
  if (card.createdAt) {
    const year = card.createdAt.substring(0, 4);
    const month = card.createdAt.substring(5, 7);
    const day = card.createdAt.substring(8, 10);
    // const hour = createdAt.substring(11, 13);
    // const minute = createdAt.substring(14, 16);
    date = `${year}.${month}.${day}`;
  }

  return (
    <BackgroundDiv $visible={$visible}>
      <ContainerDiv $visible={$visible}>
        <SenderFrameDiv>
          <div>
            <ProfileImageDiv>
              <img src={card.profileImageURL} alt={card.sender} />
            </ProfileImageDiv>
            <SenderInfoDiv>
              <div>
                <span>From.</span>
                <span className="name">{card.sender}</span>
              </div>
              <BadgeDiv badge={card.relationship}>{card.relationship}</BadgeDiv>
            </SenderInfoDiv>
          </div>
          <p className="date">{date}</p>
        </SenderFrameDiv>
        <ContentDiv>
          <p>{card.content}</p>
        </ContentDiv>
        <CheckButton onClick={() => onClick()}>확인</CheckButton>
      </ContainerDiv>
    </BackgroundDiv>
  );
}

DetailCard.propTypes = {
  $visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  card: PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    relationship: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
    profileImageURL: PropTypes.string,
  }),
};

DetailCard.defaultProps = {
  card: {
    id: 0,
    sender: '',
    relationship: '',
    createdAt: '',
    content: '',
    profileImageURL: '',
  },
};

const BackgroundDiv = styled.div`
  background: rgba(0, 0, 0, 0.6);
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ContainerDiv = styled.div`
  width: 600px;
  height: 476px;
  padding: 40px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: all 0.2s linear;
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 0.5s ease;
  cursor: default;

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`;

const SenderFrameDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-top: 4px;
    align-items: center;
  }

  & > .date {
    color: var(--gray-400, #999);
    /* Font/14 Regular */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.07px;
  }
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
  flex-shrink: 0;
  margin-top: 16px;

  & > p {
    width: 500px;
    height: 240px;
    display: -webkit-box;
    overflow-y: scroll;
    color: var(--gray600);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;
    margin-bottom: 16px;
    padding-right: 10px;

    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      border-radius: 6px;
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--gray300);
      border-radius: 8px;
    }

    @media (max-width: 600px) {
      width: 90%;
      height: auto;
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

const CheckButton = styled.button`
  width: 120px;
  margin: 24px auto auto;
  align-items: center;
  justify-content: center;
  padding: 7px 16px;
  border-radius: 6px;
  background-color: var(--purple600);
  margin-bottom: 11px;

  color: var(--white);
  text-align: center;
  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.05); /* Scale the button slightly on hover */
  }
`;

export default DetailCard;

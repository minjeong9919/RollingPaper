import React from 'react';
import styled from 'styled-components';
import RollingCard from '../components/rollingPage/RollingCard';
import profileImage from '../assets/images/senderProfileImage.png';

function RollingPage() {
  const cardList = [
    {
      name: null,
    },
    {
      name: '김동훈',
      badge: '동료',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!'.repeat(
          3,
        ),
    },
    {
      name: '강미나',
      badge: '친구',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
    {
      name: '강미나',
      badge: '친구',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
    {
      name: '강미나',
      badge: '친구',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
    {
      name: '강미나',
      badge: '친구',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
  ];
  return (
    <ContainerDiv>
      {cardList.map((card) => {
        return (
          <RollingCard
            name={card.name}
            badge={card.badge}
            date={card.date}
            content={card.content}
            imgUrl={card.imgUrl}
          />
        );
      })}
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, 384px);
  grid-template-rows: repeat(auto-fill, 280px);
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};
  padding-top: 113px;
`;

export default RollingPage;

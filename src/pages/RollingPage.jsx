import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import RollingCard from '../components/RollingPage/RollingCard';
import profileImage from '../assets/images/senderProfileImage.png';
import AddCard from '../components/RollingPage/AddCard';
import DetailCard from '../components/RollingPage/DetailCard';

function RollingPage() {
  const cardList = [
    {
      id: 1,
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
      id: 2,
      name: '강미나',
      badge: '친구',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
    {
      id: 3,
      name: '강미나',
      badge: '지인',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
    {
      id: 4,
      name: '강미나',
      badge: '가족',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
    {
      id: 5,
      name: '강미나',
      badge: '친구',
      date: '2023.07.08',
      imgUrl: profileImage,
      content:
        '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
    },
  ];

  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const onDetailClickHandle = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  return (
    <>
      <GlobalStyles />
      <DetailCard visible={isDetailVisible} onClick={onDetailClickHandle} />
      <ContainerDiv>
        <CardsListsDiv>
          {cardList.length < 6 ? <AddCard /> : null}
          {cardList.map((card) => {
            return (
              <RollingCard
                key={card.id}
                name={card.name}
                badge={card.badge}
                date={card.date}
                content={card.content}
                imgUrl={card.imgUrl}
                onClick={onDetailClickHandle}
              />
            );
          })}
        </CardsListsDiv>
      </ContainerDiv>
    </>
  );
}

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  overflow: auto;
  background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};
  cursor: pointer;
`;

const CardsListsDiv = styled.div`
  width: 1200px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 280px);
  justify-content: center;
  align-items: center;
  gap: 28px 24px;
  padding-top: 114px;
  margin: auto;

  @media (max-width: 1248px) {
    width: auto;
    padding: 114px 24px 0px;
  }

  @media (max-width: 768px) {
    width: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 93px 24px 0px;
    gap: 16px;
  }

  @media (max-width: 360px) {
    width: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 80px 20px;
    gap: 16px;
  }
`;

export default RollingPage;

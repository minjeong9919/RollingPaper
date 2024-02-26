import React from 'react';
import styled from 'styled-components';
import RollingCard from '../components/rollingPage/RollingCard';
import profileImage from '../assets/images/senderProfileImage.png';
// import AddCard from '../components/rollingPage/AddCard';
import GlobalStyles from '../styles/GlobalStyles';

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
  return (
    <>
      <GlobalStyles />
      <ContainerDiv>
        <CardsListsDiv>
          {cardList.map((card) => {
            return (
              <RollingCard
                key={card.id}
                name={card.name}
                badge={card.badge}
                date={card.date}
                content={card.content}
                imgUrl={card.imgUrl}
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
  height: 100vw;
  background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};
`;

const CardsListsDiv = styled.div`
  width: 1200px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 384px);
  grid-template-rows: repeat(2, 280px);
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-top: 114px;
  margin: auto;

  @media (max-width: 1248px) {
    width: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 0px 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 352px);
    grid-template-rows: repeat(4, 284px);
    gap: 16px;
  }
`;

export default RollingPage;

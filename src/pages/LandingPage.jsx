import React from 'react';
import styled from 'styled-components';
import LandingCard from '../components/landingPage/LandingCard';
import LandingImg1 from '../assets/images/landing1.png';
import LandingImg2 from '../assets/images/landing2.png';
import LinkButton from '../components/landingPage/Button';

function LandingPage() {
  const cards = [
    {
      id: 1,
      point: 'Point. 01',
      title: '누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요',
      description: '로그인 없이 자유롭게 만들어요.',
      imgSrc: LandingImg1,
    },
    {
      id: 2,
      point: 'Point. 02',
      title: '서로에게 이모지로 감정을 표현해보세요',
      description: '롤링 페이퍼에 이모지를 추가할 수 있어요.',
      imgSrc: LandingImg2,
    },
  ];

  return (
    <>
      <ContainerMain>
        {cards.map((card) => (
          <LandingCard key={card.id} card={card} />
        ))}
      </ContainerMain>
      <ButtonContainerDiv>
        <LinkButton to="/list">구경해보기</LinkButton>
      </ButtonContainerDiv>
    </>
  );
}

export default LandingPage;

const ContainerMain = styled.main`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 60px auto 24px;
  @media all and (min-width: 768px) and (max-width: 1248px) {
    margin: 49px 0;
    padding: 0 24px;
  }
  @media all and (max-width: 768px) {
    padding: 24px 20px;
    gap: 24px;
  }
`;

const ButtonContainerDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 24px 0;
  margin: auto;
  text-align: center;
  @media all and (min-width: 768px) and (max-width: 1248px) {
    padding: 24px;
  }
  @media all and (max-width: 768px) {
    padding: 24px 20px;
  }
`;

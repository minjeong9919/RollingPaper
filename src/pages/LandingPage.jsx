import React from 'react';
import styled from 'styled-components';
import LandingCard from '../components/landingPage/LandingCard';
import LinkButton from '../components/landingPage/Button';
import Header from '../components/Common/header/Header';

function LandingPage() {
  return (
    <>
      <Header />
      <Container>
        <LandingCard />
        <LinkButton to="/list">구경해보기</LinkButton>
      </Container>
    </>
  );
}

export default LandingPage;
const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto 0;
  @media all and (min-width: 768px) and (max-width: 1248px) {
    margin: 49px 0;
    padding: 0 24px;
    max-width: none;
  }
  @media all and (max-width: 768px) {
    padding: 24px 20px;
    gap: 24px;
    max-width: none;
  }
`;

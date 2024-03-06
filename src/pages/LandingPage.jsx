import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import LinkButton from '../components/LandingPage/Button';
import LandingCard from '../components/LandingPage/LandingCard';
import Header from '../components/Common/Header/Header';

function LandingPage({ theme = 'light' }) {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <LandingCard theme={theme} />
          <LinkButton to="/list">구경해보기</LinkButton>
        </Wrapper>
      </Container>
    </>
  );
}
LandingPage.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LandingPage;

const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

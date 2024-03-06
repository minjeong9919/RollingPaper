import React from 'react';
import styled from 'styled-components';
import ListCard from '../components/ListPage/ListCard';
import LinkButton from '../components/LandingPage/Button';
import Header from '../components/Common/Header/Header';

function ListPage() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <ListCard />
          <LinkButton to="/post">나도 만들어보기</LinkButton>
        </Wrapper>
      </Container>
    </>
  );
}

export default ListPage;

const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor};
  transition: all 0.3s ease;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  padding: 0 24px;
  @media all and (max-width: 1248px) {
    overflow: hidden;
  }
`;

import React from 'react';
import styled from 'styled-components';
import ListCard from '../components/listPage/ListCard';
import Header from '../components/common/header/Header';
import LinkButton from '../components/landingPage/Button';

function ListPage() {
  return (
    <>
      <Header />
      <Container>
        <ListCard />
        <LinkButton to="/post">나도 만들어보기</LinkButton>
      </Container>
    </>
  );
}

export default ListPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

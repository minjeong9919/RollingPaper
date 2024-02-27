import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import RollingCard from '../components/RollingPage/RollingCard';
import AddCard from '../components/RollingPage/AddCard';
import DetailCard from '../components/RollingPage/DetailCard';
import cardList from '../constants/CardLists';

function RollingPage() {
  // const ApiTest = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://rolling-api.vercel.app/4-3/recipients/',
  //     );

  //     const result = await response.json();
  //     console.log(result);
  //     return result;
  //   } catch (e) {
  //     console.error(e);
  //     throw e;
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await ApiTest();
  //     } catch (error) {
  //       // 오류 처리
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const onDetailClickHandle = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  return (
    <>
      <GlobalStyles />
      <DetailCard $visible={isDetailVisible} onClick={onDetailClickHandle} />
      <ContainerDiv>
        <CardsListsDiv>
          {cardList.length < 6 ? <AddCard /> : null}
          {cardList.map((card) => {
            return (
              <RollingCard
                key={card.id}
                sender={card.sender}
                relationship={card.relationship}
                createdAt={card.createdAt}
                content={card.content}
                profileImageURL={card.profileImageURL}
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

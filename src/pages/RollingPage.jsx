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
  const [isEditMode, setIsEditMode] = useState(false);

  const onDetailClickHandle = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  const onEditModClickHandle = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <GlobalStyles />
      <DetailCard $visible={isDetailVisible} onClick={onDetailClickHandle} />
      <ContainerDiv>
        <div className="Div">
          <EditBtn $isEditMode={isEditMode} onClick={onEditModClickHandle}>
            삭제하기
          </EditBtn>
          <CompleteBtn $isEditMode={isEditMode} onClick={onEditModClickHandle}>
            수정완료
          </CompleteBtn>
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
                  $isEditMode={isEditMode}
                />
              );
            })}
          </CardsListsDiv>
        </div>
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

  & > .Div {
    padding-top: 114px;
    width: 1200px;
    margin: auto;

    @media (max-width: 1248px) {
      width: auto;
      padding: 114px 24px 0px;
    }

    @media (max-width: 768px) {
      width: auto;
      padding: 93px 24px 0px;
    }
  }
`;

const CardsListsDiv = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 280px);
  justify-content: center;
  align-items: center;
  gap: 28px 24px;
  margin: auto;

  @media (max-width: 768px) {
    width: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 360px) {
    width: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 16px;
  }
`;

const EditBtn = styled.button`
  display: ${({ $isEditMode }) => (!$isEditMode ? 'block' : 'none')};
  padding: 8px 17px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--gray300);
  margin-bottom: 11px;

  color: black;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

const CompleteBtn = styled(EditBtn)`
  display: ${({ $isEditMode }) => ($isEditMode ? 'block' : 'none')};
  background: var(--purple600);
  color: #fff;
`;

export default RollingPage;

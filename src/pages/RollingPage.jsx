import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import GlobalStyles from '../styles/GlobalStyles';
import RollingCard from '../components/RollingPage/RollingCard';
import DetailCard from '../components/RollingPage/DetailCard';
// import cardList from '../constants/CardLists';
import AddCard from '../components/RollingPage/AddCard';
import Header from '../components/Common/Header/Header';
import RollingPageHeader from '../components/RollingPage/RollingHeader/RollingPageHeader';
import Toast from '../components/Common/Toast';

function RollingPage() {
  const [cardlist, setCardlist] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [userTopReactions, setUserTopReactions] = useState([]);
  const [isSharedToastVisible, setIsSharedToastVisible] = useState(false);

  const BaseUrl = 'https://rolling-api.vercel.app/4-3/recipients/2844/';

  const getMessage = async () => {
    try {
      const response = await fetch(`${BaseUrl}messages/`);
      const result = await response.json();
      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await fetch(`${BaseUrl}`);
      const result = await response.json();
      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const getUserTopReactions = async () => {
    try {
      const response = await fetch(`${BaseUrl}reactions/`);
      const result = await response.json();
      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let messages;
      let useInfo;
      let topReactions;
      try {
        messages = await getMessage();
        useInfo = await getUserInfo();
        topReactions = await getUserTopReactions();
      } catch (error) {
        // 오류 처리
        console.error(error);
      }

      messages = messages.results;
      topReactions = topReactions.results;

      setCardlist(messages);
      setUserInfo(useInfo);
      setUserTopReactions(topReactions);

      console.log(topReactions);
    };

    fetchData();
  }, []);

  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [clickedUser, setClickedUser] = useState({});

  const onDetailClickHandle = (clickedCard) => {
    setIsDetailVisible(!isDetailVisible);
    setClickedUser(clickedCard);
  };

  const onEditModClickHandle = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    userInfo.name && (
      <>
        <GlobalStyles />
        <Toast
          setShowToast={setIsSharedToastVisible}
          showToast={isSharedToastVisible}
        />
        <DetailCard
          $visible={isDetailVisible}
          onClick={onDetailClickHandle}
          card={clickedUser}
        />
        <ContainerDiv>
          <Header name={String(userInfo.name)} />
          <RollingPageHeader
            name={userInfo.name}
            messageCount={userInfo.messageCount}
            cardList={cardlist}
            setIsSharedToastVisible={setIsSharedToastVisible}
            topReactions={userTopReactions}
          />
          <div className="Div">
            <EditBtn $isEditMode={isEditMode} onClick={onEditModClickHandle}>
              <DeleteIcon />
              삭제하기
            </EditBtn>
            <CompleteBtn
              $isEditMode={isEditMode}
              onClick={onEditModClickHandle}
            >
              수정완료
            </CompleteBtn>
            <CardsListsDiv>
              <AddCard />
              {cardlist.length !== 0
                ? cardlist.map((card) => {
                    return (
                      <RollingCard
                        key={card.id}
                        sender={card.sender}
                        relationship={card.relationship}
                        createdAt={card.createdAt}
                        content={card.content}
                        font={card.font}
                        profileImageURL={card.profileImageURL}
                        $isEditMode={isEditMode}
                        onClick={() => onDetailClickHandle(card)}
                      />
                    );
                  })
                : null}
            </CardsListsDiv>
          </div>
        </ContainerDiv>
      </>
    )
  );
}

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  overflow: auto;
  background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};

  & > .Div {
    padding-top: 114px;
    width: 1200px;
    margin: auto;

    @media (max-width: 1248px) {
      width: auto;
      padding: 114px 24px 0px;
    }

    @media (max-width: 768px) {
      padding: 93px 20px 0px;
    }
  }
`;

const CardsListsDiv = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
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

  @media (max-width: 368px) {
    width: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 16px;
  }
`;

const EditBtn = styled.button`
  display: ${({ $isEditMode }) => (!$isEditMode ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 8px 17px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--gray300);
  margin-bottom: 11px;

  color: var(--gray600);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.16px;

  &:hover {
    transform: scale(1.05); /* Scale the button slightly on hover */
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 8px 0px;
    position: fixed;
    bottom: 24px;
    left: 24px;
    right: 24px;
    margin: 0;
    z-index: 999;
  }

  @media (max-width: 360px) {
    width: auto;
    padding: 8px 0px;
    position: fixed;
    bottom: 24px;
    left: 20px;
    right: 20px;
    margin: 0;
    z-index: 999;
  }
`;

const CompleteBtn = styled(EditBtn)`
  display: ${({ $isEditMode }) => ($isEditMode ? 'block' : 'none')};
  background: var(--purple600);
  color: #fff;
`;

export default RollingPage;

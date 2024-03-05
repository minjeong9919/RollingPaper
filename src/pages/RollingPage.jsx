import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import RollingCard from '../components/RollingPage/RollingCard';
import DetailCard from '../components/RollingPage/DetailCard';
// import cardList from '../constants/CardLists';
import AddCard from '../components/RollingPage/AddCard';
import Header from '../components/Common/Header/Header';
import RollingPageHeader from '../components/RollingPage/RollingHeader/RollingPageHeader';
import Toast from '../components/Common/Toast';
import { deleteMsgData, getCardData, getUserInfo } from '../apis/api';

function RollingPage() {
  const { id } = useParams();
  // const [offset, setOffset] = useState(0);
  // const [isMoreData, setIsMoreData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cardlist, setCardlist] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isSharedToastVisible, setIsSharedToastVisible] = useState(false);
  const [deleteMsgId, setDeleteMsgId] = useState('');
  const [nextCard, setNextCard] = useState(null);
  const navigate = useNavigate();

  const fetchDataForRollingPage = async () => {
    try {
      setLoading(true);
      const [messages, useInfo] = await Promise.all([
        getCardData(id),
        getUserInfo(id),
      ]);

      const newCardList = messages.results;

      setUserInfo(useInfo);
      setCardlist(newCardList);
      setNextCard(messages.next);
    } catch (error) {
      // 오류 처리
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataForRollingPage();
  }, []);

  // 무한 스크롤 구현
  const lastCardRef = useRef(null);

  const loadMoreData = async () => {
    try {
      setLoading(true);

      if (nextCard) {
        console.log(nextCard);
        const response = await fetch(`${nextCard}`);
        if (response.ok) {
          const messages = await response.json();
          setCardlist((prevData) => [...prevData, ...messages.results]);
          setNextCard(messages.next);
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
      } else setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onIntersectionHandle = async (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        loadMoreData();
        console.log('스크롤의 끝에 도달했습니다.');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersectionHandle, {
      threshold: 1,
    });

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      if (lastCardRef.current) {
        observer.unobserve(lastCardRef.current);
      }
    };
  }, [id, loading]);

  // 카드 지우기
  useEffect(() => {
    if (deleteMsgId) {
      deleteMsgData(deleteMsgId);
    }
  }, [deleteMsgId]);

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

  const onAddCardClickHandle = () => {
    navigate(`/post/${id}/message`);
  };

  return (
    userInfo.name && (
      <>
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
            id={id}
            messageCount={userInfo.messageCount}
            cardList={cardlist}
            setIsSharedToastVisible={setIsSharedToastVisible}
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
              <AddCard onClick={onAddCardClickHandle} />
              {cardlist.length !== 0
                ? cardlist.map((card, index) => {
                    const isLastCard = index === cardlist.length - 1;
                    return (
                      <RollingCard
                        key={card.id}
                        id={card.id}
                        sender={card.sender}
                        relationship={card.relationship}
                        createdAt={card.createdAt}
                        content={card.content}
                        font={card.font}
                        profileImageURL={card.profileImageURL}
                        $isEditMode={isEditMode}
                        onClick={() => onDetailClickHandle(card)}
                        setDeleteId={setDeleteMsgId}
                        ref={isLastCard ? lastCardRef : null}
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
  margin-bottom: 24px;

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

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardData from './CardData';


function ListCard() {
  const [cardData, setCardData] = useState({ popular: [], recent: [] });
  const [popularScroll, setPopularScroll] = useState(0);
  const [recentScroll, setRecentScroll] = useState(0);
  const [popularLength, setPopularLength] = useState(0);
  const [recentLength, setRecentLength] = useState(0);
  const CARD_WIDTH = 295;

  useEffect(() => {
    Promise.all([
      fetch('https://rolling-api.vercel.app/4-3/recipients/?sort=like'),
      fetch('https://rolling-api.vercel.app/4-3/recipients/'),
    ]).then(([popularRes, recentRes]) =>
      Promise.all([popularRes.json(), recentRes.json()]).then(
        ([popularData, recentData]) => {
          setCardData({
            popular: popularData.results,
            recent: recentData.results,
          });
          setPopularLength(popularData.results.length);
          setRecentLength(recentData.results.length);
        },
      ),
    );
  }, []);
  const onPopularPrevClickHandle = () => {
    setPopularScroll(popularScroll - CARD_WIDTH);
    setPopularLength(popularLength + 1);
  };
  const onPopularNextClickHandle = () => {
    setPopularScroll(popularScroll + CARD_WIDTH);
    setPopularLength(popularLength - 1);
  };
  const onRecentPrevClickHandle = () => {
    setRecentScroll(recentScroll - CARD_WIDTH);
    setRecentLength(recentLength + 1);
  };
  const onRecentNextClickHandle = () => {
    setRecentScroll(recentScroll + CARD_WIDTH);
    setRecentLength(recentLength - 1);
  };

  return (
    <>
      <CardListContainerSection>
        <CardListTitleH2>인기 롤링 페이퍼 🔥</CardListTitleH2>
        <div className="ListCardContent">
          {popularScroll ? (
            <PrevButton onClick={onPopularPrevClickHandle} />
          ) : null}
          <CardList>
            <CardData cardData={cardData.popular} translateX={popularScroll} />
          </CardList>
          {popularLength > 4 ? (
            <NextButton onClick={onPopularNextClickHandle} />
          ) : null}
        </div>
      </CardListContainerSection>

      <CardListContainerSection>
        <CardListTitleH2>최근에 만든 롤링 페이퍼 ⭐</CardListTitleH2>
        <div className="ListCardContent">
          {recentScroll ? (
            <PrevButton onClick={onRecentPrevClickHandle} />
          ) : null}
          <CardList>
            <CardData cardData={cardData.recent} translateX={recentScroll} />
          </CardList>
          {recentLength > 4 ? (
            <NextButton onClick={onRecentNextClickHandle} />
          ) : null}
        </div>
      </CardListContainerSection>
    </>
  );
}
export default ListCard;

const CardListContainerSection = styled.section`
  width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  .ListCardContent {
    position: relative;
    width: 100%;
  }
  @media all and (max-width: 1248px) {
    width: 100%;
  }
`;
const CardListTitleH2 = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: var(--font24, 2.4rem);
  font-weight: var(--bold, 700);
  line-height: 36px;
  letter-spacing: -0.24px;
`;
const CardList = styled.div`
  overflow: hidden;

  @media all and (max-width: 1248px) {
    overflow: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -2rem;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.borderBottom};
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px #0006;
  z-index: 5;
  &::before {
    content: '＜';
    font-size: var(--font24, 2.4rem);
    color: ${({ theme }) => theme.text};
    line-height: 4rem;
  }
  @media all and (max-width: 1248px) {
    display: none;
  }
`;

const NextButton = styled(PrevButton)`
  right: -2rem;
  left: initial;
  &::before {
    content: '＞';
  }
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardData from './CardData';

function ListCard() {
  const [cardData, setCardData] = useState({ popular: [], recent: [] });

  useEffect(() => {
    Promise.all([
      fetch('https://rolling-api.vercel.app/4-4/recipients/?sort=like'),
      fetch('https://rolling-api.vercel.app/4-4/recipients/'),
    ]).then(([popularRes, recentRes]) =>
      Promise.all([popularRes.json(), recentRes.json()]).then(
        ([popularData, recentData]) => {
          setCardData({
            popular: popularData.results,
            recent: recentData.results,
          });
        },
      ),
    );
  }, []);

  return (
    <>
      <CardListContainerSection>
        <CardListTitleH2>인기 롤링 페이퍼 🔥</CardListTitleH2>
        <CardData cardData={cardData.popular} />
      </CardListContainerSection>

      <CardListContainerSection>
        <CardListTitleH2>최근에 만든 롤링 페이퍼 ⭐</CardListTitleH2>
        <CardData cardData={cardData.recent} />
      </CardListContainerSection>
    </>
  );
}

const CardListContainerSection = styled.section`
  width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;
const CardListTitleH2 = styled.h2`
  color: var(--black, #000);
  font-size: var(--font24, 2.4rem);
  font-weight: var(--bold, 700);
  line-height: 36px;
  letter-spacing: -0.24px;
`;
export default ListCard;

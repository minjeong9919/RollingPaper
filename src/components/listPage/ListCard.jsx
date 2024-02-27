import React, { useState } from 'react';
import {
  CardCommentCountDiv,
  CardCommentImgBoxDiv,
  CardListBoxDiv,
  CardListContainerSection,
  CardListTitleH2,
  CardReactionDiv,
  CardReactionWrapperDiv,
  CardRecipientDiv,
  CardRecipientWrapperDiv,
  CardWrapperLink,
} from './ListCard.style';

function ListCard() {
  const [cardList, setCardList] = useState([]);
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => setCardList(data));
  const maxElements = 5;
  const slicedArray = cardList.slice(0, maxElements);
  return (
    <CardListContainerSection>
      <CardListTitleH2>인기 롤링 페이퍼 🔥</CardListTitleH2>
      <CardListBoxDiv>
        {slicedArray.map((list) => (
          <article key={list.id}>
            <CardWrapperLink>
              <CardRecipientWrapperDiv>
                <CardRecipientDiv>To. {list.title}</CardRecipientDiv>
                <CardCommentImgBoxDiv>
                  <img
                    className="commentImg"
                    src={list.thumbnailUrl}
                    alt="코멘트 이미지"
                  />
                  <img
                    className="commentImg"
                    src={list.thumbnailUrl}
                    alt="코멘트 이미지"
                  />
                  <img
                    className="commentImg"
                    src={list.thumbnailUrl}
                    alt="코멘트 이미지"
                  />
                  <div className="commentImg">+zzzzzz{list.id}</div>
                </CardCommentImgBoxDiv>
                <CardCommentCountDiv>
                  <span className="CommentCount">30</span>명이 작성했어요!
                </CardCommentCountDiv>
              </CardRecipientWrapperDiv>
              <CardReactionWrapperDiv>
                <CardReactionDiv>
                  👍<span className="ReactionCount">20</span>
                </CardReactionDiv>
              </CardReactionWrapperDiv>
            </CardWrapperLink>
          </article>
        ))}
      </CardListBoxDiv>
    </CardListContainerSection>
  );
}

export default ListCard;

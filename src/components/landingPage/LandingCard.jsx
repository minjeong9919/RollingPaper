import React from 'react';
import PropTypes from 'prop-types';
import {
  CardBadgeDiv,
  CardContainerSection,
  CardDescDiv,
  CardWrapperDiv,
} from './LandingCard.style';

function LandingCard({ card }) {
  const { id, point, title, description, imgSrc } = card;
  const even = id % 2 === 0;

  return (
    <CardContainerSection even={even}>
      <CardWrapperDiv>
        <CardBadgeDiv>{point}</CardBadgeDiv>
        <CardDescDiv>
          <h2 className="Title">{title}</h2>
          <p className="Description">{description}</p>
        </CardDescDiv>
      </CardWrapperDiv>
      <img src={imgSrc} alt="랜딩 페이지 이미지" />
    </CardContainerSection>
  );
}
LandingCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    point: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};
export default LandingCard;

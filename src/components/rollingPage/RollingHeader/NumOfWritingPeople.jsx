import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileFrame from './ProfileFrame';

export default function NumOfWritingPeople({ messageCount, threePeople }) {
  return (
    <NumOfWritingPeopleDiv>
      <EclipseDiv>
        <ProfileFrame
          type="image"
          left="0px"
          profileImgURL={threePeople[0] ? threePeople[0].profileImageURL : null}
        />
        <ProfileFrame
          type="image"
          left="16px"
          profileImgURL={threePeople[1] ? threePeople[1].profileImageURL : null}
        />
        <ProfileFrame
          type="image"
          left="32px"
          profileImgURL={threePeople[2] ? threePeople[2].profileImageURL : null}
        />
        <ProfileFrame type="number" left="48px" number={messageCount} />
      </EclipseDiv>
      <p>
        <span className="number">{messageCount}</span>
        명이 작성했어요!
      </p>
    </NumOfWritingPeopleDiv>
  );
}
NumOfWritingPeople.propTypes = {
  messageCount: PropTypes.number,
  threePeople: PropTypes.arrayOf(
    PropTypes.shape({
      profileImageURL: PropTypes.string,
    }),
  ),
};

NumOfWritingPeople.defaultProps = {
  messageCount: '',
  threePeople: [],
};

const NumOfWritingPeopleDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  & > p {
    color: var(--gray900);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;

    & > .number {
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const EclipseDiv = styled.div`
  width: 76px;
  height: 28px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

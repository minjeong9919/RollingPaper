import React from 'react';
import PropTypes from 'prop-types';
import ProfileFrame from './ProfileFrame';
import { NumOfWritingPeopleDiv, EclipseDiv } from './RollingHeader.style';

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
        <ProfileFrame
          type="number"
          left="48px"
          number={messageCount - 3 > 0 ? messageCount - 3 : 0}
        />
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

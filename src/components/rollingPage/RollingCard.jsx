import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import {
  ContainerDiv,
  SenderFrameDiv,
  ProfileImageDiv,
  SenderInfoDiv,
  DeleteIconBtn,
  BadgeDiv,
  ContentDiv,
} from '../../styles/RollingPage/RollingCard.style';

const RollingCard = forwardRef(
  (
    {
      id,
      sender,
      relationship,
      createdAt,
      profileImageURL,
      content,
      font,
      onClick,
      $isEditMode,
      setDeleteId,
    },
    ref,
  ) => {
    const year = createdAt.substring(0, 4);
    const month = createdAt.substring(5, 7);
    const day = createdAt.substring(8, 10);
    // const hour = createdAt.substring(11, 13);
    // const minute = createdAt.substring(14, 16);
    const date = `${year}.${month}.${day}`;

    const onDeleteBtnHandle = () => {
      setDeleteId(id);
    };

    return (
      <ContainerDiv onClick={() => $isEditMode || onClick()} ref={ref}>
        <SenderFrameDiv>
          <ProfileImageDiv>
            <img src={profileImageURL} alt={sender} />
          </ProfileImageDiv>
          <SenderInfoDiv>
            <div>
              <span>From.</span>
              <span className="name">{sender}</span>
            </div>
            <BadgeDiv $badge={relationship}>{relationship}</BadgeDiv>
          </SenderInfoDiv>
          <DeleteIconBtn
            $isEditMode={$isEditMode}
            onClick={() => {
              onDeleteBtnHandle();
            }}
          >
            <DeleteIcon />
          </DeleteIconBtn>
        </SenderFrameDiv>
        <ContentDiv $font={font}>
          <p dangerouslySetInnerHTML={{ __html: content }} />
          <p className="date">{date}</p>
        </ContentDiv>
      </ContainerDiv>
    );
  },
);

RollingCard.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  relationship: PropTypes.string,
  createdAt: PropTypes.string,
  profileImageURL: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  $isEditMode: PropTypes.bool,
  font: PropTypes.string,
  setDeleteId: PropTypes.func,
};

RollingCard.defaultProps = {
  id: 0,
  sender: '',
  relationship: '',
  createdAt: '',
  profileImageURL: '',
  content: '',
  onClick: null,
  $isEditMode: false,
  font: 'Pretendard',
  setDeleteId: null,
};

export default RollingCard;

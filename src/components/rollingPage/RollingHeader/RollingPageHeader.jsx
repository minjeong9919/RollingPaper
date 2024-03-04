import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';
import { ReactComponent as Arrow } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as AddEmotion } from '../../../assets/icons/add_emotion.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/shareBtn.svg';
import { ContainerHeader } from '../../Common/Header/Header.style';
import Emoticon from './Emoticon';
import EmoticonDetail from './EmoticonDetail';
// import emojiList from '../../../constants/EmojiList';
import NumOfWritingPeople from './NumOfWritingPeople';

function RollingPageHeader({
  name,
  messageCount,
  cardList,
  setIsSharedToastVisible,
  topReactions,
}) {
  const [isEmojiPickerVisible, setIsEmojiPickerVsiible] = useState(false);
  const [isEmoticonDetailVisible, setIsEmotionDetailVisible] = useState(false);
  // const [emojiSortedList, setEmojiSortedList] = useState([]);

  const onAddEmojiBtnHandle = () => {
    setIsEmojiPickerVsiible(!isEmojiPickerVisible);
    setIsEmotionDetailVisible(false);
  };

  const onEmoticonDetailBtnHandle = () => {
    setIsEmotionDetailVisible(!isEmoticonDetailVisible);
    setIsEmojiPickerVsiible(false);
  };

  const onSharedBtnHandle = () => {
    setIsSharedToastVisible(true);
  };

  const threePeople = cardList.slice(0, 3);

  // 이모지 베스트 뽑아오는 함수
  // useEffect(() => {
  //   let sorted = emojiList.slice();
  //   sorted = sorted.sort((a, b) => b.cnt - a.cnt).splice(0, 3);
  //   setEmojiSortedList(sorted);
  // }, []);

  return (
    <MainContainerHeader>
      <div className="HeaderContainer">
        <UserH1>To. {name}</UserH1>
        <div>
          <NumOfWritingPeople
            messageCount={messageCount}
            threePeople={threePeople}
          />
          <DividerDiv $marginLeft="26px" id="hiddenAtMobile" />
          <EmoticonDiv>
            <BestEmoticonDiv>
              {topReactions.map((reaction) => (
                <Emoticon
                  key={reaction.id}
                  emoticon={reaction.emoji}
                  count={reaction.count}
                />
              ))}
            </BestEmoticonDiv>
            <EmoticonDetail isVisible={isEmoticonDetailVisible} />
            <EmoticonDetailButton onClick={() => onEmoticonDetailBtnHandle()}>
              <Arrow />
            </EmoticonDetailButton>
            <AddEmotionButton
              onClick={() => {
                onAddEmojiBtnHandle();
              }}
            >
              <AddEmotion />
              <span>추가</span>
            </AddEmotionButton>
            <div id="EmojiPicker">
              <EmojiPicker open={isEmojiPickerVisible} />
            </div>
          </EmoticonDiv>
          <DividerDiv $marginLeft="13px" id="shrinkAtMobile" />
          <ShareButton onClick={() => onSharedBtnHandle()}>
            <ShareIcon />
          </ShareButton>
        </div>
      </div>
    </MainContainerHeader>
  );
}

RollingPageHeader.propTypes = {
  name: PropTypes.string,
  messageCount: PropTypes.number,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      profileImageURL: PropTypes.string,
    }),
  ),
  setIsSharedToastVisible: PropTypes.func,
  topReactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      emoji: PropTypes.string,
      count: PropTypes.number,
    }),
  ),
};

RollingPageHeader.defaultProps = {
  name: '',
  messageCount: 0,
  cardList: [],
  setIsSharedToastVisible: null,
  topReactions: [],
};

const MainContainerHeader = styled(ContainerHeader)`
  cursor: default;
  & .HeaderContainer {
    padding: 13px auto;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin: 0px;
      @media (max-width: 1248px) {
        margin: 0px;
      }
    }
  }
`;

const UserH1 = styled.h1`
  width: max-width;
  color: var(--gray800);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
  cursor: pointer;

  @media (max-width: 368px) {
    display: none;
  }
`;

const EmoticonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;

  & > #EmojiPicker {
    position: absolute;
    top: 42px;
    transform: translateX(00%);
  }

  @media (max-width: 368px) {
    gap: 0px;
  }
`;

const BestEmoticonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
  @media (max-width: 368px) {
    gap: auto;
  }
`;

const EmoticonDetailButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 6px;
  & > svg:hover {
    background-color: var(--gray200);
  }
`;

const AddEmotionButton = styled.button`
  width: max-content;
  padding: 6px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);

  &:hover {
    background-color: var(--gray200);
  }

  @media (max-width: 368px) {
    padding: 6px 8px;
    & > span {
      display: none;
    }
  }
`;

const DividerDiv = styled.div`
  width: 1px;
  height: 28px;
  background-color: var(--gray200);
  margin: 0px ${({ $marginLeft }) => $marginLeft};

  &#hiddenAtMobile {
    @media (max-width: 368px) {
      display: none;
    }
  }

  &#shrinkAtMobile {
    margin: 0px 11px;
  }
`;

const ShareButton = styled(AddEmotionButton)`
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export default RollingPageHeader;

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';
import { ReactComponent as Arrow } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as AddEmotion } from '../../../assets/icons/add_emotion.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/shareBtn.svg';
import Emoticon from './Emoticon';
import EmoticonDetail from './EmoticonDetail';
import NumOfWritingPeople from './NumOfWritingPeople';
import {
  MainContainerHeader,
  UserH1,
  DividerDiv,
  EmoticonDiv,
  BestEmoticonDiv,
  EmoticonDetailButton,
  AddEmotionButton,
  ShareButton,
} from './RollingHeader.style';
import {
  getReactionData,
  postReactionData,
  getUserInfo,
} from '../../../apis/api';

function RollingPageHeader({
  name,
  id,
  messageCount,
  cardList,
  setIsSharedToastVisible,
}) {
  const [isEmojiPickerVisible, setIsEmojiPickerVsiible] = useState(false);
  const [isEmoticonDetailVisible, setIsEmotionDetailVisible] = useState(false);
  const [userReactionList, setUserReactionList] = useState([]);
  const [topReactions, setTopReactions] = useState([]);

  // 유저의 받은 이모티콘 리스트 가져오기
  const fetchData = useCallback(async () => {
    try {
      const [newReactionList, userInfo] = await Promise.all([
        getReactionData(id),
        getUserInfo(id),
      ]);

      setUserReactionList(newReactionList.results);
      setTopReactions(userInfo.topReactions);
    } catch (error) {
      // 오류 처리
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      await fetchData();
    };
    fetchDataAndSetState();
  }, [fetchData, id]);

  // 새롭게 이모티콘 생성 시 POST 요청 후, 다시 GET 요청으로 리스트 변경
  const onEmojiPickerHandle = async (emojiData) => {
    const updatedEmojiFormData = {
      emoji: emojiData.emoji,
      type: 'increase',
    };
    await postReactionData(updatedEmojiFormData, id);
    const userReactions = await getReactionData(id);
    const newReactionList = userReactions.results;

    const userInfo = await getUserInfo(id);
    const newTopReactions = userInfo.topReactions;

    setUserReactionList(newReactionList);
    setTopReactions(newTopReactions);
  };

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
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };
  const threePeople = cardList.slice(0, 3);

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
            <EmoticonDetail
              isVisible={isEmoticonDetailVisible}
              emojilist={userReactionList}
            />
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
              <EmojiPicker
                open={isEmojiPickerVisible}
                onEmojiClick={onEmojiPickerHandle}
              />
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
  id: PropTypes.string,
  messageCount: PropTypes.number,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      profileImageURL: PropTypes.string,
    }),
  ),
  setIsSharedToastVisible: PropTypes.func,
};

RollingPageHeader.defaultProps = {
  name: '',
  id: '',
  messageCount: 0,
  cardList: [],
  setIsSharedToastVisible: null,
};

export default RollingPageHeader;

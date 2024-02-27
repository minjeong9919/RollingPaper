import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardListBoxDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  max-width: 1160px;
  overflow: hidden;
`;

export const CardWrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 43px;
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ $bgColor }) => $bgColor};
  background-image: ${({ $bgImg }) => `url(${$bgImg})`};
  background-size: cover;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
export const CardRecipientWrapperDiv = styled.div`
  width: 100%;
  height: 114px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const CardRecipientDiv = styled.div`
  color: var(--gray900, #181818);
  font-size: var(--font24, 2.4rem);
  font-weight: var(--bold, 700);
  line-height: 36px;
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CardCommentImgBoxDiv = styled.div`
  display: flex;
  position: relative;
  .commentImg {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1.5px solid var(--white, #fff);
    background: var(--white, #fff);
    &:nth-child(2) {
      position: absolute;
      left: 16px;
    }
    &:nth-child(3) {
      position: absolute;
      left: 32px;
    }
    &:nth-child(4) {
      width: fit-content;
      position: absolute;
      left: 48px;
      padding: 5px 6px;
      color: var(--gray500, #555);
      font-size: var(--font12, 1.2rem);
      font-weight: var(--regular, 400);
      line-height: 18px;
      letter-spacing: -0.06px;
    }
  }
`;
export const CardCommentCountDiv = styled.div`
  color: var(--gray700, #3a3a3a);
  font-size: var(--font16, 1.6rem);
  font-weight: var(--regular, 400);
  line-height: 26px;
  letter-spacing: -0.16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .CommentCount {
    font-weight: var(--bold, 700);
  }
`;
export const CardReactionWrapperDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const CardReactionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  font-size: var(--font16, 1.6rem);
  font-weight: var(--regular, 400);
  line-height: 21px;
  .ReactionCount {
    color: #fff;
    line-height: 20px;
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Emoticon({ emoticon, count }) {
  return (
    <ContainerDiv>
      <EmoticonSpan>
        <span>{emoticon}</span>
        {count}
      </EmoticonSpan>
    </ContainerDiv>
  );
}

Emoticon.propTypes = {
  emoticon: PropTypes.string,
  count: PropTypes.number,
};

Emoticon.defaultProps = {
  emoticon: '',
  count: 0,
};

const ContainerDiv = styled.div`
  width: max-content;
  padding: 8px 12px;
  gap: 10px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 368px) {
    padding: 4px 8px;
    border-radius: 20px;
  }
`;

const EmoticonSpan = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  & > span {
    margin-right: 5px;
  }
  @media (max-width: 368px) {
    font-size: 14px;
  }
`;

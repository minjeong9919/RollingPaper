import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

function AddCard() {
  return (
    <AddCardDiv>
      <PlusFrame>
        <Plus />
      </PlusFrame>
    </AddCardDiv>
  );
}

const AddCardDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 24px;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusFrame = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: var(--gray500);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default AddCard;

import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import ContainerDiv from './RollingCard';

function AddCard() {
  return (
    <AddCardDiv>
      <PlusFrame>
        <Plus />
      </PlusFrame>
    </AddCardDiv>
  );
}

const AddCardDiv = styled(ContainerDiv)`
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

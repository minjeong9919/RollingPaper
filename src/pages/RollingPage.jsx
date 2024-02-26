import React from 'react';
import styled from 'styled-components';
import RollingCard from '../components/rollingPage/RollingCard';

function RollingPage() {
  return (
    <ContainerDiv>
      <RollingCard />
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};
  width: 100vw;
  height: 100vw;
`;

export default RollingPage;

import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

function RollingPage() {
  return (
    <>
      <GlobalStyles />
      <Container>RollingPage</Container>
    </>
  );
}

const Container = styled.div`
  background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};
  width: 100vw;
  height: 100vw;
`;

export default RollingPage;

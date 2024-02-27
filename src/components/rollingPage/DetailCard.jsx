import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

function DetailCard({ $visible, onClick = null }) {
  return <BackgroundDiv $visible={$visible} onClick={() => onClick()} />;
}

DetailCard.propTypes = {
  $visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const BackgroundDiv = styled.div`
  background: rgba(0, 0, 0, 0.6);
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default DetailCard;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function BgImg({ img, color }) {
  return <BgImgWrapper img={img} color={color} />;
}

BgImg.propTypes = {
  img: PropTypes.string,
  color: PropTypes.string,
};

BgImg.defaultProps = {
  img: '',
  color: '',
};

export default BgImg;

const BgImgWrapper = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ img, color }) =>
    img
      ? `url(${img}) center / cover no-repeat, rgba(255, 255, 255, 0.3)`
      : color};
`;

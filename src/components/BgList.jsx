import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImg from './BgImg';

function Bglist({ images }) {
  return (
    <BgListWrapper>
      {images.map((image) => (
        <BgImg key={image} img={image} />
      ))}
    </BgListWrapper>
  );
}

Bglist.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

Bglist.defaultProps = {
  images: [],
};

export default Bglist;

const BgListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

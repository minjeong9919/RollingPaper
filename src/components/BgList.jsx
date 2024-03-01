import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImg from './BgImg';
import BgColor from './BgColor';

function BgList({ images, onSelectColor, onSelectImg }) {
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const onSelectedImgHandle = (img) => {
    setSelectedImg(img);
  };

  const onSelectedColorHandle = (color) => {
    setSelectedColor(color);
  };
  return (
    <BgListWrapper>
      {images.map((image) =>
        image.startsWith('http') ? (
          <BgImg
            key={image}
            img={image}
            onSelectImg={onSelectImg}
            isSelected={selectedImg === image}
            onSelectedImg={onSelectedImgHandle}
          />
        ) : (
          <BgColor
            key={image}
            color={image}
            onSelectColor={onSelectColor}
            isSelected={selectedColor === image}
            onSelectedColor={onSelectedColorHandle}
          />
        ),
      )}
    </BgListWrapper>
  );
}

BgList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onSelectColor: PropTypes.func,
  onSelectImg: PropTypes.func,
};

BgList.defaultProps = {
  images: [],
  onSelectColor: () => {},
  onSelectImg: () => {},
};

export default BgList;

const BgListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

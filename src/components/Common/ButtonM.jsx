import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ButtonM({
  text,
  width,
  height,
  margin,
  padding,
  fontSize,
  radius,
  textcolor,
  bgcolor,
  $isVisible,
  onBtnHandle,
}) {
  return (
    <Button
      $width={width}
      $height={height}
      $margin={margin}
      $padding={padding}
      $textcolor={textcolor}
      $bgcolor={bgcolor}
      $fontSize={fontSize}
      $radius={radius}
      $isVisible={$isVisible}
      onClick={() => (onBtnHandle ? onBtnHandle() : null)}
    >
      {text}
    </Button>
  );
}

ButtonM.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  radius: PropTypes.string,
  textcolor: PropTypes.string,
  bgcolor: PropTypes.string,
  $isVisible: PropTypes.bool,
  onBtnHandle: PropTypes.func,
};

ButtonM.defaultProps = {
  text: '',
  width: 'auto',
  height: 'auto',
  margin: '0px',
  padding: '0px',
  fontSize: 'auto',
  radius: '0px',
  textcolor: 'white',
  bgcolor: 'black',
  $isVisible: true,
  onBtnHandle: null,
};

const Button = styled.button`
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  width: ${({ $width }) => $width};
  min-width: max-content;
  height: ${({ $height }) => $height};
  border: 0px;
  border-radius: ${({ $radius }) => $radius};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  background: ${({ $bgcolor }) => $bgcolor};
  cursor: pointer;

  color: ${({ $textcolor }) => $textcolor};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 600;
  line-height: 21.6px;
`;

export default ButtonM;

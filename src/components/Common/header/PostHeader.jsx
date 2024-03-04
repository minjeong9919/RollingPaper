import React from 'react';
import LogoIcon from '../../../assets/icons/logo.svg';
import {
  ContainerHeader,
  HeaderLogoLink,
} from '../../../styles/Header/PostHeader.style';

function PostHeader() {
  return (
    <ContainerHeader>
      <div>
        <HeaderLogoLink to="/">
          <img src={LogoIcon} alt="로고 아이콘" />
          <h1>Rolling</h1>
        </HeaderLogoLink>
        {/* <HeaderButton to="/post">롤링 페이퍼 만들기</HeaderButton> */}
      </div>
    </ContainerHeader>
  );
}

export default PostHeader;

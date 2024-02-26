import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerHeader, HeaderButton, HeaderLogoLink } from './Header.style';
import LogoIcon from '../../../assets/icons/logo.svg';

function Header() {
  const location = useLocation();

  return (
    <ContainerHeader>
      <div className="HeaderContainer">
        <HeaderLogoLink to="/">
          <img className="LogoImage" src={LogoIcon} alt="로고 아이콘" />
          <h1 className="LogoText">Rolling</h1>
        </HeaderLogoLink>
        {location.pathname !== '/' && location.pathname !== '/list' ? null : (
          <HeaderButton to="/rolling">롤링 페이퍼 만들기</HeaderButton>
        )}
      </div>
    </ContainerHeader>
  );
}

export default Header;

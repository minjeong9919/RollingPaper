import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoIcon from '../../../assets/icons/logo.svg';

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

const ContainerHeader = styled.header`
  background-color: var(--white);
  border-bottom: 0.1rem solid #ededed;

  & > div {
    max-width: 120rem;
    height: 6.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 0;
    margin: auto;

    @media (max-width: 768px) {
      padding: 1.1rem 0;
    }

    @media (max-width: 360px) {
      display: none;
    }
  }
`;

const HeaderLogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  & > h1 {
    color: #4a494f;
    font-family: Poppins;
    font-size: 1.9971rem;
    font-weight: 700;
    line-height: normal;
  }
`;

export const HeaderButton = styled(Link)`
  display: none;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid var(--gray300, #ccc);
  background: var(--white, #fff);
  color: var(--gray900, #181818);
  text-align: center;
  font-size: var(--font16, 1.6rem);
  font-weight: var(--regular, 700);
  line-height: 26px;
  letter-spacing: -0.16px;
`;

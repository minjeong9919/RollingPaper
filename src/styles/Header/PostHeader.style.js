import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
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

export const HeaderLogoLink = styled(Link)`
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
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray300);
  background: var(--white);
  color: var(--gray900);
  font-size: var(--font16);
  font-weight: var(--regular);
  line-height: 1.625;
  letter-spacing: -0.016rem;
`;

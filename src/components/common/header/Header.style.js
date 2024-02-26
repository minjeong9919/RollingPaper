import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
  border-bottom: 1px solid #ededed;
  @media all and (max-width: 1248px) {
    padding: 0 24px;
  }
  .HeaderContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 11px 0;
  }
`;

export const HeaderLogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const HeaderButton = styled(Link)`
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

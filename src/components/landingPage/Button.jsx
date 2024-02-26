import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`
  display: inline-block;
  width: 280px;
  padding: 14px 24px;
  text-align: center;
  border-radius: 12px;
  background: var(--purple600, #9935ff);
  color: var(--white, #fff);
  font-size: var(--font18, 1.8rem);
  font-weight: var(--regular, 700);
  line-height: 28px;
  letter-spacing: -0.18px;
  text-decoration: none;
  &:hover {
    background: var(--purple700, #861dee);
  }
  &:active {
    background: var(--purple800, #6e0ad1);
  }
  @media all and (min-width: 768px) and (max-width: 1248px) {
    width: 100%;
  }
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

export default LinkButton;

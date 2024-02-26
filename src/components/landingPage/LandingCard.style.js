import styled from 'styled-components';

export const CardContainerSection = styled.section`
  display: flex;
  flex-direction: ${({ even }) => (even ? 'row-reverse' : 'row')};
  padding: ${({ even }) => (even ? '60px 192px 60px 0' : '60px 0 60px 60px')};
  gap: ${({ even }) => (even ? '0px' : '152px')};
  border-radius: 16px;
  background: var(--surface, #f6f8ff);
`;

export const CardWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .Title {
    color: var(--gray900, #181818);
    font-size: var(--font24, 2.4rem);
    font-weight: var(--bord, 700);
    line-height: 36px;
    letter-spacing: -0.24px;
  }
  .Description {
    color: var(--gray500, #555);
    font-size: var(--font18, 1.8rem);
    font-weight: var(--regular, 700);
    line-height: 28px;
    letter-spacing: -0.18px;
  }
`;

export const CardBadgeDiv = styled.div`
  width: fit-content;
  color: var(--white, #fff);
  font-size: var(--font14, 1.4rem);
  font-weight: var(--bord, 700);
  line-height: 20px;
  letter-spacing: -0.07px;
  padding: 6px 12px;
  border-radius: 50px;
  background: var(--purple600, #9935ff);
`;

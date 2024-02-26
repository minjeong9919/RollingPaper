const getBadgeColor = (badge) => {
  switch (badge) {
    case '동료':
      return 'var(--purple100)';
    case '지인':
      return 'var(--purple100)';
    default:
      return '#000000'; // 기본값 설정
  }
};
export default getBadgeColor;

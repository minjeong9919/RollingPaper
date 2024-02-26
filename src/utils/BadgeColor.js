export const getBadgeBgColor = (badge) => {
  switch (badge) {
    case '동료':
      return 'var(--purple100)';
    case '지인':
      return 'var(--orange100)';
    case '가족':
      return 'var(--green100)';
    case '친구':
      return 'var(--blue100)';
    default:
      return '#000000'; // 기본값 설정
  }
};

export const getBadgeTextColor = (badge) => {
  switch (badge) {
    case '동료':
      return 'var(--purple600)';
    case '지인':
      return 'var(--orange500)';
    case '가족':
      return 'var(--green500)';
    case '친구':
      return 'var(--blue500)';
    default:
      return '#000000'; // 기본값 설정
  }
};

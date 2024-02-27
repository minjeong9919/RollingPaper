// 카드들의 데이터를 가져오기 위해 임의로 만든 파일입니다.
// 추후에 api 연동 시 삭제할 예정이에요!!

import profileImage from '../assets/images/senderProfileImage.png';

const cardList = [
  {
    id: 32,
    recipientId: 2,
    sender: '김하은',
    profileImageURL:
      'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    relationship: '가족',
    content: '열심히 일하는 모습 멋있습니다.',
    font: 'Pretendard',
    createdAt: '2023-11-01T08:05:25.399056Z',
  },
  {
    id: 1,
    recipientId: 2,
    sender: '김동훈',
    profileImageURL: profileImage,
    relationship: '동료',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!'.repeat(
        3,
      ),
    createdAt: '2023-11-01T08:05:25.399056Z',
  },
  {
    id: 2,
    recipientId: 2,
    sender: '강미나',
    relationship: '친구',
    createdAt: '2023-11-01T08:05:25.399056Z',
    profileImageURL: profileImage,
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
  },
  {
    id: 3,
    recipientId: 2,
    sender: '강미나',
    relationship: '지인',
    createdAt: '2023-11-01T08:05:25.399056Z',
    profileImageURL: profileImage,
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
  },
  {
    id: 4,
    recipientId: 2,
    sender: '강미나',
    relationship: '가족',
    createdAt: '2023-11-01T08:05:25.399056Z',
    profileImageURL: profileImage,
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
  },
  {
    id: 5,
    recipientId: 2,
    sender: '강미나',
    relationship: '친구',
    createdAt: '2023-11-01T08:05:25.399056Z',
    profileImageURL: profileImage,
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!',
  },
];

export default cardList;

const BASE_URL = 'https://rolling-api.vercel.app/background-images/';

export default async function GetBgImg() {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error('요청이 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

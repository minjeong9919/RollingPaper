const BASE_URL = `https://rolling-api.vercel.app`;

const getProfileImg = async () => {
  const response = await fetch(`${BASE_URL}/profile-images/`);
  const result = response.json();
  return result;
};

export default getProfileImg;

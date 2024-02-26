import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app';

export default async function GetBgImg() {
  try {
    const res = await axios.get(`${BASE_URL}/background-images`);
    const body = res.data;
    return body;
  } catch (err) {
    console.log(err);
  }
}

const BASE_URL = `https://rolling-api.vercel.app`;

export const getRecipients = async () => {
  const response = await fetch(`${BASE_URL}/4-3/recipients/`);
  const result = response.json();
  return result;
};

export const getProfileImg = async () => {
  const response = await fetch(`${BASE_URL}/profile-images/`);
  const result = response.json();
  return result;
};

export const postFormData = async (formData, id) => {
  const response = await fetch(`${BASE_URL}/4-3/recipients/${id}/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  return response;
};

export const deleteMsgData = async (id) => {
  const response = await fetch(`${BASE_URL}/4-3/messages/${id}/`, {
    method: 'DELETE',
  });
  return response;
};

export const getUserInfo = async (id) => {
  const response = await fetch(`${BASE_URL}/4-3/recipients/${id}/`);
  const result = response.json();
  return result;
};

export const getReactionData = async (id) => {
  const response = await fetch(`${BASE_URL}/4-3/recipients/${id}/reactions/`);
  const result = response.json();
  return result;
};

export const postReactionData = async (formData, id) => {
  const response = await fetch(`${BASE_URL}/4-3/recipients/${id}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  return response;
};

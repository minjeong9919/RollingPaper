const BASE_URL = `https://rolling-api.vercel.app`;

export const getRecipients = async () => {
  const response = await fetch(`${BASE_URL}/4-3/recipients/`);
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

// TODO: Move this to environment variable
const API_URL = "http://localhost:3001";

// TODO: Add HTTP service that generalizes API_URL and other configuration settings
export const fetchCameraData = () => {
  const uri = `${API_URL}/data`;

  return fetch(uri).then((response) => response.json());
};

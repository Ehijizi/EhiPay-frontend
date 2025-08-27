const API_URL = process.env.REACT_APP_API_URL;

export const getHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    return null;
  }
};

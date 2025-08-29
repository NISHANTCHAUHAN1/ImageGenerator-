// Function to fetch images from Unsplash API
export const fetchImages = async (query, page = 1) => {
  // Get the API access key from environment variables
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  // API call to Unsplash with search query, page number, and access key
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=15`
  );

  // If response is not successful, throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  // data in JSON format
  return response.json();
};

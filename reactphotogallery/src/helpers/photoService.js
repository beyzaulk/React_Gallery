import { createClient } from "pexels";

const PER_PAGE = 20;
const client = createClient(process.env.React_App_Key);

const getPhotos = async (page) => {
  try {
    const result = await client.photos.curated({
      per_page: PER_PAGE,
      page,
    });
    return (result?.photos || []);
  } catch (error) {
    console.error("Error fetching curated photos:", error);
    return [];
  }
};

export { getPhotos, PER_PAGE };

import axios from "../../utils/axios";
const getRelatedVideos = async ({ tags, id }) => {
  // ?tags_like=javascript&tags_like=react&id_ne=1&_limit=5
  const limit = 5;
  let queryStr =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const respons = await axios.get(`/videos?${queryStr}`);
  return respons.data;
};

export default getRelatedVideos;

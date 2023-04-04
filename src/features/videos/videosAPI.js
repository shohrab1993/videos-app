import axios from "../../utils/axios";

const getVedeos = async ({ tags, search }) => {
  let queryStr = "";
  if (tags?.length > 0) {
    queryStr += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== "") {
    queryStr += `&q=${search}`;
  }
  const respons = await axios.get(`/videos?${queryStr}`);
  return respons.data;
};

export default getVedeos;

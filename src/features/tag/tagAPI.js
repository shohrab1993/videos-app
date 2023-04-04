import axios from "../../utils/axios";

const getTags = async () => {
  const respons = await axios.get("/tags");
  return respons.data;
};

export default getTags;

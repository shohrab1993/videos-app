import axios from "../../utils/axios";
const getVideo = async (id) => {
  const respons = await axios.get(`/videos/${id}`);
  return respons.data;
};

export default getVideo;

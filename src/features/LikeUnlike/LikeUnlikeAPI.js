import axios from "../../utils/axios";
const updateLikeUnlike = async (updatedValue) => {
  const { videoId, liked, unLiked } = updatedValue;

  const response = await axios.patch(`/videos/${videoId}`, {
    likes: liked,
    unlikes: unLiked,
  });
  return response.data;
};
export default updateLikeUnlike;

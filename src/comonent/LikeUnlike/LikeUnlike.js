import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import LikeImage from "../../assets/like.svg";
import UnlikeImage from "../../assets/unlike.svg";
import { fetchUpdateLikeUnlike } from "../../features/LikeUnlike/LikeUnlikSlice";

const LikeUnlike = ({ like, unLike }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(like);
  const [unLiked, setUnliked] = useState(unLike);

  const { videoId } = useParams();

  const updatedValue = {
    videoId,
    liked,
    unLiked,
  };
  // handle incriment
  const handleIncriment = () => {
    dispatch(fetchUpdateLikeUnlike(updatedValue));
    setLiked((prev) => prev + 1);
  };
  // handle decrement
  const handleDecrement = () => {
    setUnliked((prev) => prev + 1);
    dispatch(fetchUpdateLikeUnlike(updatedValue));
  };

  return (
    <>
      <div className="flex gap-10 w-48">
        <div className="flex gap-1">
          <div className="shrink-0">
            <img
              className="w-5 block cursor-pointer"
              src={LikeImage}
              alt="Like"
              onClick={handleIncriment}
            />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {liked}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="shrink-0">
            <img
              className="w-5 block cursor-pointer"
              src={UnlikeImage}
              alt="Unlike"
              onClick={handleDecrement}
            />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {unLiked}
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeUnlike;

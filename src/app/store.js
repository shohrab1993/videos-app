import { configureStore } from "@reduxjs/toolkit";
import likeUnlikeReducer from "../features/LikeUnlike/LikeUnlikSlice";
import filterReducer from "../features/filter/filterSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideoSlice";
import tagReducer from "../features/tag/tagSlice";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
    likeUnlike: likeUnlikeReducer,
  },
});

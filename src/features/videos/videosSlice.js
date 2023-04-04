import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVedeos from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

//asynk thunk
export const fetchVideos = createAsyncThunk(
  "videos/fechVideos",
  async ({ tags, search }) => {
    const videos = await getVedeos({ tags, search });
    return videos;
  }
);

//slice
const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;

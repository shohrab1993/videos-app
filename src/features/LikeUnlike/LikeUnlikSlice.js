import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import updateLikeUnlike from "./LikeUnlikeAPI";
const initialState = {
  like: 0,
  unlike: 0,
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk

export const fetchUpdateLikeUnlike = createAsyncThunk(
  "likeUnlike/fetchUpdateLikeUnlike",
  async (updatedValue) => {
    const likeUnlik = await updateLikeUnlike(updatedValue);
    return likeUnlik;
  }
);

// slice

const likeUnlikeSlice = createSlice({
  name: "likeUnlike",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdateLikeUnlike.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUpdateLikeUnlike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.like = action.payload.likes;
        state.unLike = action.payload.unlikes;
      });
  },
});

export default likeUnlikeSlice.reducer;

export const { incriment, decrement } = likeUnlikeSlice.actions;

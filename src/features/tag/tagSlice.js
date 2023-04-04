import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagAPI";
const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};
//thunk
export const fetchTags = createAsyncThunk("tag/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

//slice

const tagSlice = createSlice({
  name: "tag",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default tagSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selecteTags: (state, action) => {
      state.tags.push(action.payload);
    },
    removedTags: (state, action) => {
      const index = state.tags.indexOf(action.payload);
      if (index !== -1) {
        state.tags.splice(index, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { selecteTags, removedTags, searched } = filterSlice.actions;

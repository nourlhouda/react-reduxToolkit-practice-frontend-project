import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//read posts
export const getAllPosts = createAsyncThunk(
  "user/getAllPosts",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/posts/read");
      return data;
    } catch (errors) {
      rejectWithValue(errors.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    postList: [],
    loading: false,
    errors: null,
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.postList = action.payload;
      state.errors = null;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default postSlice.reducer;

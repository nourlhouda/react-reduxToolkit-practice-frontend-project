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

//add a new post
export const addPost = createAsyncThunk(
  "user/addPost",
  async (info, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/posts/create", info, {
        headers: { token: localStorage.getItem("token") },
      });
      return response.data; // Return the created post data
    } catch (errors) {
      rejectWithValue(errors.response.data);
    }
  }
);

//delete post by Id
export const deletePost = createAsyncThunk(
  "user/deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/delete/${postId}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return response.data; // Return the created post data
    } catch (errors) {
      rejectWithValue(errors.response.data);
    }
  }
);

//update post by Id
export const updatePost = createAsyncThunk(
  "user/updatePost",
  async (postInfo, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/api/posts/update/${postInfo.id}`,
        postInfo,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      return response.data; // Return the created post data
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
    [addPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.postList.push(action.payload);
      state.errors = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.postList.push(action.payload);
      state.errors = null;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.postList.push(action.payload);
      state.errors = null;
    },
  },
});

export default postSlice.reducer;

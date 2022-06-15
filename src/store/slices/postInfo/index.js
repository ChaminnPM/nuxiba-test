import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postSlice = createSlice({
  name: "postInfo",
  initialState: {
    comments: [],
  },
  reducers: {
    setComments: (state, action) => {
      state.comments = state.comments.concat(action.payload);
    },
  },
});

export const { setComments } = postSlice.actions;
export default postSlice.reducer;

export const fetchComments = (id) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
    .then((response) => response.data)
    .then((json) => dispatch(setComments(json)));
};

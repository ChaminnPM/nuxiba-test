import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setComments } from "../postInfo";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    info: {},
    todos: [],
    posts: [],
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
    setTodos: (state, action) => {
      state.todos = action.payload.sort((a, b) => b.id - a.id);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setUserInfo, setPosts, setTodos } = userInfoSlice.actions;
export default userInfoSlice.reducer;

export const fetchUserInfo = (id) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.data)
    .then((json) => dispatch(setUserInfo(json)));
};

export const fetchUserPosts = (id) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.data)
    .then((json) =>
      json.map((post) => {
        dispatch(setPosts(json));
        axios
          .get(`https://jsonplaceholder.typicode.com/post/${post.id}/comments`)
          .then((response) => response.data)
          .then((comm) => dispatch(setComments(comm)));
      })
    );
};

export const fetchUserTodos = (id) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then((response) => response.data)
    .then((json) => dispatch(setTodos(json)));
};

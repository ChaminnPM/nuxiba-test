import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    error: null,
  },
  reducers: {
    setUsersList: (state, action) => {
      state.list = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsersList, setError } = userSlice.actions;
export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
    .then((json) => dispatch(setUsersList(json)))
    .catch((err) => {
      dispatch(setError(err));
    });
};

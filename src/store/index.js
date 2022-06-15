import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";
import userInfo from "./slices/userInfo";
import postInfo from "./slices/postInfo";

export default configureStore({
  reducer: {
    users,
    userInfo,
    postInfo,
  },
});

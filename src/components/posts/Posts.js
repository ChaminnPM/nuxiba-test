import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../../views/helpers/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts, fetchUserTodos } from "../../store/slices/userInfo";
import View from "../../views/posts/Posts";
import { addComments } from "../../store/slices/userInfo";
import { fetchComments } from "../../store/slices/postInfo";

function Posts({ userId }) {
  const [loading, setLoading] = useState(false);
  const { posts } = useSelector((state) => state.userInfo);
  const { comments } = useSelector((state) => state.postInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(fetchUserPosts(userId));
    setLoading(false);
  }, [dispatch]);

  if (loading) return <Loading />;

  return <View posts={posts} comments={comments} />;
}
Posts.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Posts;

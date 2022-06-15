import React from "react";
import PropTypes from "prop-types";

const Posts = ({ posts, comments }) => (
  <div class="card">
    <h1 class="card-header">Posts</h1>

    <div class="card-body">
      {posts.map((post) => (
        <div class="row">
          <div class="col">
            <h2>Post: {post.title}</h2>
            <div class="form-group">
              <p>{post.body}</p>
            </div>
            <div class="form-group">
              <h3>Comments</h3>
              {comments.map((comm) =>
                comm.postId === post.id ? (
                  <div>
                    <h4>{comm.name}</h4>
                    <p>{comm.email}</p>
                    <p>{comm.body}</p>
                    <hr />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;

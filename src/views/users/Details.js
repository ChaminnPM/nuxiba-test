import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user }) => (
  <div class="card">
    {/* Header */}
    <div class="profile-cover">
      <div class="profile-cover-img-wrapper"></div>
    </div>
    <label class="avatar avatar-xxl avatar-circle avatar-border-lg profile-cover-avatar">
      <img
        id="avatarImg"
        class="avatar-img"
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
        alt="Icon"
        style={{ width: "100%" }}
      />
    </label>

    {/* Body */}
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h2>{user.name}</h2>
          <div class="form-group">
            <label>{user.username}</label>
            <div class="p-2">
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div class="card-footer">
      <div class="d-flex justify-content-end">
        <a href={`/users/${user.id}/Posts`} class="btn btn-secondary mr-2">
          Posts
        </a>
        <a href={`/users/${user.id}/Todos`} class="btn btn-secondary mr-2">
          Todos
        </a>
      </div>
    </div>
  </div>
);

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetails;

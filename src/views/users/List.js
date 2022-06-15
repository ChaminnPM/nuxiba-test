import React from "react";
import PropTypes from "prop-types";

const UserList = ({ users }) => (
  <div>
    <ul class="list-group">
      {users.map((user) => (
        <li key={user.id} class="list-group-item">
          <div class="row align-items-center gx-2">
            <div class="col-auto">
              <img
                class="avatar"
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                alt="Icon"
              />
            </div>

            <div class="col">
              <h5 class="mb-0">
                <a href={`/users/${user.id}`}>{user.name}</a>
              </h5>
              <ul class="list-inline list-separator small">
                <li class="list-inline-item">Email: {user.email}</li>
                <li class="list-inline-item">Phone: {user.phone}</li>
              </ul>
            </div>

            <div class="col-auto">
              {/* Options */}
              <a href={`/users/${user.id}`} className="btn btn-sm btn-white">
                <span class="d-none d-sm-inline-block mr-1">Details</span>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;

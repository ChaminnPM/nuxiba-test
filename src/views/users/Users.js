import React from "react";
import { BrowserRouter } from "react-router-dom";
import ModalRoute from "../helpers/ModalRoute";
import UserList from "../../components/users/List";
import UserDetails from "../../components/users/Details";
import Posts from "../../components/posts/Posts";
import Todos from "../../components/todos/Todos";

const Users = () => (
  <BrowserRouter basename="/users">
    <div class="content container-fluid p-5">
      <div class="page-header pb-2">
        <div class="row align-items-end">
          <div class="col-sm">
            <h2 class="page-header-title">Usuarios</h2>
          </div>
        </div>
      </div>
      <UserList />

      <ModalRoute path="/:userId(\d+)" component={UserDetails} />

      <ModalRoute path="/:userId(\d+)/posts" component={Posts} />
      <ModalRoute path="/:userId(\d+)/todos" component={Todos} />
    </div>
  </BrowserRouter>
);

Users.propTypes = {};

export default Users;

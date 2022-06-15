import React, { useState, useEffect } from "react";
import Loading from "../../views/helpers/Loading";
import View from "../../views/users/List";
import { fetchAllUsers } from "../../store/slices/users";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const [loading, setLoading] = useState(false);
  const { list: users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllUsers());
    setLoading(false);
  }, [dispatch]);

  if (loading) return <Loading />;

  return <View users={users} />;
}

UserList.propTypes = {};

export default UserList;

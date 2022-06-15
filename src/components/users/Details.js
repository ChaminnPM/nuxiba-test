import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../../views/helpers/Loading";
import View from "../../views/users/Details";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../store/slices/userInfo";

function UserDetails({ userId }) {
  const [loading, setLoading] = useState(false);
  const { info: user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(fetchUserInfo(userId));
    setLoading(false);
  }, [dispatch]);
  if (loading) return <Loading />;

  return <View user={user} />;
}

UserDetails.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserDetails;

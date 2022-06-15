import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../../views/helpers/Loading";
import { useDispatch, useSelector } from "react-redux";
import View from "../../views/todos/Todos";
import { fetchUserTodos } from "../../store/slices/userInfo";
import axios from "axios";

function Todos({ userId }) {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { todos } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(fetchUserTodos(userId));
    setLoading(false);
  }, [dispatch]);

  const onSubmit = (values) => {
    const data = { userId: userId, title: values.title, completed: completed };
    axios
      .post(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, data)
      .then((response) => console.log(response.data));
  };

  if (loading) return <Loading />;

  return (
    <View
      todos={todos}
      onSubmit={onSubmit}
      completed={completed}
      setCompleted={setCompleted}
    />
  );
}
Todos.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Todos;

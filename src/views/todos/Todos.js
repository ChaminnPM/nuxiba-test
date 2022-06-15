import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

const Todos = ({ todos, onSubmit, completed, setCompleted }) => (
  <div class="card">
    <h1 class="card-header">Todos</h1>

    <div class="card-body">
      <h4>Todo List</h4>
      {todos.map((todo) => (
        <div class="row">
          <div class="col">
            <h4>Id: {todo.id}</h4>
            <div class="form-group">
              <p>{todo.title}</p>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <h4>Create Todo</h4>
      <div class="row ">
        <div class="col">
          <Formik initialValues={{}} onSubmit={onSubmit}>
            {({ values, setFieldValue }) => (
              <Form>
                <div class="mb-3">
                  <div class="form-group">
                    <label class="input-label">Title</label>
                    <Field
                      type="text"
                      name="title"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-check">
                    {completed ? (
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={completed}
                        checked
                        onChange={() => setCompleted(!completed)}
                      />
                    ) : (
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={completed}
                        onChange={() => setCompleted(!completed)}
                      />
                    )}
                    <label class="form-check-label"> Completed</label>
                  </div>
                </div>
                <button type="submit" class="btn btn-block btn-primary">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;

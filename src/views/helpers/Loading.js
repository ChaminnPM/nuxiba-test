import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import css from "../../resources/css/helpers/Loading.module.css";

class Loading extends React.Component {
  render() {
    return (
      <div className={css.module}>
        <CircularProgress className={css.loading} />
      </div>
    );
  }
}

Loading.propTypes = {};

export default Loading;

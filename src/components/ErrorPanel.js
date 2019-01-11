import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getErrorState } from "../selectors";
import { resetError } from "../actions";
import "./ErrorPanel.scss";

const ErrorPanel = React.memo(({ error, resetError }) => {
  if (!error) return null;
  return (
    <div className="error-panel">
      <i className="fas fa-exclamation-triangle" />
      Error: {error} <i onClick={resetError} className="far fa-times-circle" />
    </div>
  );
});

export default connect(
  state => ({
    error: getErrorState(state)
  }),
  {
    resetError
  }
)(ErrorPanel);

ErrorPanel.propTypes = {
  error: PropTypes.string,
  resetError: PropTypes.func,
};

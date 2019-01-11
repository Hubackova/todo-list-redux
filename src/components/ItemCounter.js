import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getCompletedCount } from "../selectors";

const ItemCounter = React.memo(({ completedCount }) => (
  <div>
    Počet dokončených úkolů: <b>{completedCount}</b>
  </div>
));

export default connect(state => ({
  completedCount: getCompletedCount(state)
}))(ItemCounter);

ItemCounter.propTypes = {
  completedCount: PropTypes.number
};

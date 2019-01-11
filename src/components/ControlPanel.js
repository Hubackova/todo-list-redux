import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getIncompletedIds, getCompletedIds, getFilter } from "../selectors";
import { changeFilter, completeAll, deleteAllCompleted } from "../actions";
import { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } from "../constants";
import "./ControlPanel.scss";

const ControlPanel = React.memo(
  ({
    changeFilter,
    completeAll,
    deleteAllCompleted,
    incompletedIds,
    completedIds,
    activeFilter
  }) => (
    <header className="App-header">
      <h1 className="App-title">Todo app</h1>
      <div className="control-panel">
        <button
          onClick={() => changeFilter(SHOW_COMPLETED)}
          className={activeFilter === SHOW_COMPLETED ? "active" : ""}
        >
          <i className="fas fa-check-circle" />
          Zobrazit dokončené
        </button>
        <button
          onClick={() => changeFilter(SHOW_ACTIVE)}
          className={activeFilter === SHOW_ACTIVE ? "active" : ""}
        >
          <i className="far fa-circle" /> Zobrazit aktivní
        </button>
        <button
          onClick={() => changeFilter(SHOW_ALL)}
          className={activeFilter === SHOW_ALL ? "active" : ""}
        >
          <i className="fas fa-globe" />
          Zobrazit všechny
        </button>
        <button onClick={() => completeAll(incompletedIds)}>
          <i className="fas fa-check-double" />
          Vše dokončeno
        </button>
        <button onClick={() => deleteAllCompleted(completedIds)}>
          <i className="fas fa-trash" />
          Vymazat dokončené
        </button>
      </div>
    </header>
  )
);

export default connect(
  state => ({
    incompletedIds: getIncompletedIds(state),
    completedIds: getCompletedIds(state),
    activeFilter: getFilter(state)
  }),
  {
    changeFilter,
    completeAll,
    deleteAllCompleted
  }
)(ControlPanel);

ControlPanel.propTypes = {
  changeFilter: PropTypes.func,
  completeAll: PropTypes.func,
  deleteAllCompleted: PropTypes.func,
  incompletedIds: PropTypes.arrayOf(PropTypes.string),
  completedIds: PropTypes.arrayOf(PropTypes.string),
  activeFilter: PropTypes.string
};

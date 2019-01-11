import { takeLatest, call, put, all } from "redux-saga/effects";
import * as ActionTypes from "../constants";
import * as Api from "../api";

function* fetchTodosSaga() {
  try {
    const response = yield call(Api.fetchTodos);
    const payload = response.data;
    yield put({ type: ActionTypes.FETCH_TODOS.SUCCESS, payload });
  } catch (error) {
    yield put({ type: ActionTypes.API_CALL_FAILURE, err: error.response });
  }
}

function* addTodoSaga({ text }) {
  try {
    const response = yield call(Api.addTodo, text);
    const payload = response.data;
    yield put({ type: ActionTypes.ADD_TODO.SUCCESS, payload });
  } catch (error) {
    yield put({ type: ActionTypes.API_CALL_FAILURE, err: error.response });
  }
}

function* deleteTodoSaga({ id }) {
  try {
    yield call(Api.deleteTodo, id);
    yield put({ type: ActionTypes.DELETE_TODO.SUCCESS, id });
  } catch (error) {
    yield put({ type: ActionTypes.API_CALL_FAILURE, err: error.response });
  }
}

function* editTodoSaga({ id, text }) {
  try {
    const response = yield call(Api.editTodo, id, text);
    const payload = response.data;
    yield put({ type: ActionTypes.EDIT_TODO.SUCCESS, payload });
  } catch (error) {
    yield put({ type: ActionTypes.API_CALL_FAILURE, err: error.response });
  }
}

function* toggleTodoSaga({ id, completed }) {
  try {
    const response = completed
      ? yield call(Api.incompleteTodo, id)
      : yield call(Api.completeTodo, id);
    const payload = response.data;
    yield put({ type: ActionTypes.TOGGLE_TODO.SUCCESS, payload });
  } catch (error) {
    yield put({ type: ActionTypes.API_CALL_FAILURE, err: error.response });
  }
}

function* completeAllSaga({ ids }) {
  try {
    const responses = yield all(
      ids.map(id => {
        return call(Api.completeTodo, id);
      })
    );
    yield all(
      responses.map(response => {
        const payload = response.data;
        return put({ type: ActionTypes.TOGGLE_TODO.SUCCESS, payload });
      })
    );
  } catch (error) {
    yield put({ type: ActionTypes.API_CALL_FAILURE, err: error.response });
  }
}

function* deleteAllSaga({ ids }) {
  try {
    yield all(
      ids.map(id => {
        return call(Api.deleteTodo, id);
      })
    );
    yield put({ type: ActionTypes.DELETE_ALL_COMPLETED.SUCCESS });
  } catch (error) {
    yield put({ type: ActionTypes.API_CALL_FAILURE, err: error.response });
  }
}

function* watcherSaga() {
  yield takeLatest(ActionTypes.FETCH_TODOS.REQUEST, fetchTodosSaga);
  yield takeLatest(ActionTypes.ADD_TODO.REQUEST, addTodoSaga);
  yield takeLatest(ActionTypes.DELETE_TODO.REQUEST, deleteTodoSaga);
  yield takeLatest(ActionTypes.EDIT_TODO.REQUEST, editTodoSaga);
  yield takeLatest(ActionTypes.TOGGLE_TODO.REQUEST, toggleTodoSaga);
  yield takeLatest(ActionTypes.COMPLETE_ALL.REQUEST, completeAllSaga);
  yield takeLatest(ActionTypes.DELETE_ALL_COMPLETED.REQUEST, deleteAllSaga);
}

export default watcherSaga;

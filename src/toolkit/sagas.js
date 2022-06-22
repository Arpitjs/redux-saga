import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers } from "./userReducer";
import { sagaActions } from "./actions";

const { GET_USERS_FETCH } = sagaActions;

function usersFetch() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch);
  yield put(getUsers(users));
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;

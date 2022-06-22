import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers } from "./userReducer";

export const sagaActions = {
  FETCH_DATA_SAGA: "FETCH_DATA_SAGA",
};

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
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, workGetUsersFetch);
}

export default mySaga;

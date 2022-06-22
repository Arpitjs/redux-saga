import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import usersReducer from "./userReducer";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;

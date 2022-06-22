import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export default configureStore({
  reducer: {
    users: userReducer,
  },
  middleware,
});

sagaMiddleware.run(mySaga);

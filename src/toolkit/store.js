import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./sagas";
import { counterReducer } from "./createReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

const store = configureStore({
  reducer: {
    users: userReducer,
    counter: persistedReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
sagaMiddleware.run(mySaga);

export default store;

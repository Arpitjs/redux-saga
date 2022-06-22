import React from "react";
import HookForms from "./components/HookForms";
import { Provider } from "react-redux";
import store from './toolkit/store'
// import store from './redux/store'
import List from "./components/List";

const App = () => {
  return (
    <Provider store={store}>
      <HookForms />
      <List />
    </Provider>
  );
};

export default App;


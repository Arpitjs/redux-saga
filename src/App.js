import React from "react";
import { Provider } from "react-redux";
// import store from './toolkit/store'
import store from "./redux/store";
import List from "./components/List";
import List2 from './components/List2'

const App = () => {
  return (
    <Provider store={store}>
      {/* <List />  */}
      <List2 />
    </Provider>
  );
};

export default App;


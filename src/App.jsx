import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CounterComponent/>
      </div>
    </Provider>
  )
}

export default App
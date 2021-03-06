import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state =) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
        case 'RESET':
          return {
            count: 0
          };
          default:
            return state;
}
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
}
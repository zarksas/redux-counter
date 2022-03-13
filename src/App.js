import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ButtomDecrement from "./ButtomDecrement";
import ButtonIncrement from "./ButtonIncrement";
import Number from "./Number";
import Random from "./Random";
import Reset from "./Reset";

const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function App() {
  const initialSatate = {
    number: 0,
  };

  const reducer = (state = initialSatate, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          number: state.number + 1,
        };
      case "decrement":
        return {
          ...state,
          number: state.number - 1,
        };
      case "reset":
        return {
          ...state,
          number: (state.number = 0),
        };
      case "random":
        return {
          ...state,
          number: (state.number += randomNumber(0, 100)),
        };
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Number />
      <ButtonIncrement />
      <ButtomDecrement />
      <Reset />
      <Random />
    </Provider>
  );
}

export default App;

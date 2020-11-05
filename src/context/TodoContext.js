import React from "react";
import todoReducer from "./reducer";

export const TodoContext = React.createContext();

export const TodoContextProvider = (props) => {
  const [todos, dispatch] = React.useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={[ todos, dispatch ]}>
      {props.children}
    </TodoContext.Provider>
  );
};

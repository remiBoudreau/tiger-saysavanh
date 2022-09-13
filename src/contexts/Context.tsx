import React from "react";
import { reducer, initialState } from "./Reducer";

export const Context = React.createContext({
  state: initialState,
  dispatch: () => null,
});
//@ts-ignore
export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    //@ts-ignore
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

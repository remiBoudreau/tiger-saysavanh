export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "start_transition":
      return {
        ...state,
        transition: true,
      };
    case "end_transition":
      return {
        ...state,
        transition: false,
      };
    case "toggle_dark":
      return {
        ...state,
        light: !state.light,
      };
    default:
      return state;
  }
};

export const initialState = {
  transition: false,
  light: true,
};

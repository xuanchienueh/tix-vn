const stateDefault = {
  theme: "dark",
};

let themeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "change_theme":
      state.theme = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default themeReducer;

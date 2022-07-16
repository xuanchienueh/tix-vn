const initialState = {
  isLoading: 0,
  navigate: null,
};
export const DISPLAY_LOADING = "DISPLAY_LOADING";
export const HIDDEN_LOADING = "HIDDEN_LOADING";
const LoadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISPLAY_LOADING:
      state.isLoading = true;
      return { ...state };
    case HIDDEN_LOADING:
      state.isLoading = false;
      return { ...state };

    case "NAVIGATE": {
      state.navigate = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default LoadingReducer;

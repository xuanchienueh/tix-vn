const stateDefault = {
  id: { name: "a", age: 18 },
  comments: [1, 2, 3],
};

let FBreducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "add":
      state.comments = [...state.comments, action.payload];
      return { ...state };
    default:
      return { ...state };
  }
};

export default FBreducer;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "../reducers/CarouselReducer/CarouselReducer";

const rootReducer = combineReducers({
  CarouselReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };

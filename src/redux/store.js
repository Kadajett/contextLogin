import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState);
}

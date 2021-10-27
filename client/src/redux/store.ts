import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

function saveToLocalStorage(state: any) {
  localStorage.setItem("state", JSON.stringify(state));
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

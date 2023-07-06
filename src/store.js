import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import productReducer from "./reducers/ProductReducer";
// import { cartReducer } from "./reducers/CartReducer";
// import productReducer from "./reducers/ProductReducer";
import userReducer from "./reducer/UserReducer";

const reducer = combineReducers({
  user: userReducer,
});

const middlware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;

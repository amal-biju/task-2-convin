import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postsReducer } from "./posts/reducer";

const reducer = combineReducers({
   post: postsReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

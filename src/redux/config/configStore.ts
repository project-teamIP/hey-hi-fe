import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;

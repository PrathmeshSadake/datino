import { combineReducers } from "redux";
import { getAllCategoriesReducer } from "./categoryReducer";

const rootReducer = combineReducers({
  categories: getAllCategoriesReducer,
});

export default rootReducer;

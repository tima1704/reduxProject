import { combineReducers } from "redux";
import { likesReducer } from "./LikesReducer.js";
import { inputReducer } from './TextReducer.js';
import { CommentsReducer } from './CommentsReducer.js'
export const RootReducer = combineReducers({
     likesReducer,inputReducer,CommentsReducer
})
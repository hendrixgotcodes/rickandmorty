import { combineReducers } from "@reduxjs/toolkit";
import app from "./features/app";

const rootReducer = combineReducers({
    app
})

export default rootReducer
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import chartModeReducer from"./chartModeSlice";
import homeCoinsReducer from "./homeCoinsSlice";
import coinDetialetialReducer from "./coinDetialetialSlice";

const store=configureStore({
    reducer:{
        chartMode:chartModeReducer,
        homeCoins:homeCoinsReducer,
        coinDetial:coinDetialetialReducer
    },
    devTools:process.env.NODE_ENV !=="production",
    middleware: [thunk]
});
export default store;

import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import chartModeReducer from"./chartModeSlice";
import homeCoinsReducer from "./homeCoinsSlice";
import coinDetialetialReducer from "./coinDetialetialSlice";
import coinMarketReducer from "./marketDataSlice";
import coinCandleReducer from "./candleDataSlice";

const store=configureStore({
    reducer:{
        CoinCandle: coinCandleReducer,
        CoinMarket:coinMarketReducer,
        chartMode:chartModeReducer,
        homeCoins:homeCoinsReducer,
        coinDetial:coinDetialetialReducer,

    },
    devTools:process.env.NODE_ENV !=="production",
    middleware: [thunk]
});
export default store;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCoinMarketChart } from "../api";

const getCoinMarketAsync=createAsyncThunk(
    'CoinMarket/getCoinMarket',
    async(coin)=>{
        const data= await getCoinMarketChart(coin.id,coin.rang);  
        // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
        // console.log("CCCCCCCCCCCC" +coin.id);
        // console.log("BBBBBBBBBBB" +coin.rang);
        // console.log("QQQQQQQQQ" +coin.name);
        // console.log("ZZZZZZZZZZZZZ" +coin.test);
        //console.log(data);
        return data;
    }
);
const initialState={
    coinMarket:[],
    status:"idle",

};
const marketDataSlice=createSlice({
    name:"CoinMarket",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getCoinMarketAsync.pending,(state)=>{
            state.status="loading";
        })
        .addCase(getCoinMarketAsync.fulfilled, (state,action)=>{
            state.status="idle";
            state.coinMarket=action.payload;
        })
        // .addCase(getCoinMarketAsync.rejected,(state)=>{
        //     state.status="fail";
        // })
    },
});
export const selectCoinMarketData=(state)=>state.CoinMarket.coinMarket;
export const selectStatus=(state)=>state.CoinMarket.status;
export {getCoinMarketAsync};
export default marketDataSlice.reducer;

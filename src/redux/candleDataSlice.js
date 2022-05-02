import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCandleChartData } from "../api";

const getCoinCandleAsync=createAsyncThunk(
    'CoinCandle/getCoinCandle',
    async(coin)=>{
        const data= await getCandleChartData(coin.id,coin.rang);  
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
    coinCandle:[],
    status:"idle",

};
const candleDataSlice=createSlice({
    name:"CoinCandle",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getCoinCandleAsync.pending,(state)=>{
            state.status="loading";
        })
        .addCase(getCoinCandleAsync.fulfilled, (state,action)=>{
            state.status="idle";
            state.coinCandle=action.payload;
        })
        // .addCase(getCoinCandleAsync.rejected,(state)=>{
        //     state.status="fail";
        // })
    },
});
export const selectCoinCandleData=(state)=>state.CoinCandle.coinCandle;
export const selectStatus=(state)=>state.CoinCandle.status;
export {getCoinCandleAsync};
export default candleDataSlice.reducer;

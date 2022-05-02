import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailedCoinData } from "../api";


const getCoinDetialAsync=createAsyncThunk(
    'coinDetial/getCoin',
    async(coinId)=>{
        const data= await getDetailedCoinData(coinId);  //不需要{}
       // console.log(data);
        return data;
    }
);
const initialState={
    coinData:[],
    status:"idle",

};
const detialSlice=createSlice({
    name:"coinDetial",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getCoinDetialAsync.pending,(state)=>{
            state.status="loading";
        })
        .addCase(getCoinDetialAsync.fulfilled, (state,action)=>{
            state.status="idle";
            state.coinData=action.payload;
        })
        // .addCase(getCoinsAsync.rejected,(state)=>{
        //     state.status="fail";
        // })
    },
});
export const selectCoinData=(state)=>state.coinDetial.coinData;
export const selectStatus=(state)=>state.coinDetial.status
export {getCoinDetialAsync}
export default detialSlice.reducer;

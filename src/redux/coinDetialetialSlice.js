import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailedCoinData } from "../api";


const getCoinDetialAsync=createAsyncThunk(
    'coinDetial/getCoin',
    async(coinId)=>{
        const data= await getDetailedCoinData(coinId);  //不需要{}
        // console.log(data);
        // console.log(data.id);
        const tmp={
            id:"",
            image:"https://upload.wikimedia.org/wikipedia/commons/7/78/HSNU_Logo.png",
            symbol:"",
            rank:"",
        };
        tmp.id=data.id;
        tmp.image=data.image.small;
        tmp.symbol=data.symbol;
        tmp.rank=data.market_data.market_cap_rank;
        // console.log(tmp);
        return tmp;
    }
);
const initialState={
    coinData:{
        id:"AAA",
        image:"",
        symbol:"777",
        rank:"777",
    },
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
        .addCase(getCoinDetialAsync.rejected,(state)=>{
            state.status="fail";
            state.coinData="";
        })
    },
});
export const selectCoinData=(state)=>state.coinDetial.coinData;
export const selectStatus=(state)=>state.coinDetial.status
export {getCoinDetialAsync}
export default detialSlice.reducer;

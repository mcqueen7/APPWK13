// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getMarketData } from "../api";

// const getCoinsAsync=createAsyncThunk(
//     'homeCoins/getCoins',
//     async(pageNumber)=>{
//         const data= await getMarketData(pageNumber);  //不需要{}
//         // console.log("AAAAAAAAAAAAAAAAAA");
//         // console.log(data[1].name);
//         return data;
//     }
// );
// const initialState={
//     coinsData:[],
//     status:"idle",

// };
// const homeCoinsSlice=createSlice({
//     name:"homeCoins",
//     initialState,
//     extraReducers:(builder)=>{
//         builder
//         .addCase(getCoinsAsync.pending,(state)=>{
//             state.status="loading";
//         })
//         .addCase(getCoinsAsync.fulfilled, (state,action)=>{
//             state.status="idle";
//             state.coinsData=action.payload;
//         })
//         // .addCase(getCoinsAsync.rejected,(state)=>{
//         //     state.status="fail";
//         // })
//     },
// });
// export const selectHomeCoinsData=(state)=>state.homeCoins.coinsData;
// export const selectStatus=(state)=>state.homeCoins.status
// export {getCoinsAsync}
// export default homeCoinsSlice.reducer;

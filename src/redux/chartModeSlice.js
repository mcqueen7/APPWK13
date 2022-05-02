import { createSlice } from "@reduxjs/toolkit";

const initialState={
    modeValue:false
};

const chartModeSlice=createSlice({
    name:"chartMode",
    initialState,
    reducers:{
        toggleChartMode:(state)=>{
            state.modeValue=!(state.modeValue);
        },
    }
});
export const selectChartMode=(state)=>state.chartMode.modeValue;
export const {toggleChartMode}=chartModeSlice.actions;
export default chartModeSlice.reducer;

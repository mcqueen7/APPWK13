import { createSlice } from "@reduxjs/toolkit";

const initialState={
    ModeValue:false
};

const chartModeSlice=createSlice({
    name:"chartMode",
    initialState,
    reducers:{
        toggleChartMode:(state)=>{
            !state.ModeValue;
        },
    }
});
export const selectChartMode=(state)=>state.chartMode.ModeValue;
export const {toggleChartMode}=chartModeSlice.actions;
export default chartModeSlice.reducer;

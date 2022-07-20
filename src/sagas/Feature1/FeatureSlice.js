import { createSlice } from "@reduxjs/toolkit";
const initialState={
  data:{},
  errorMsg:{}
}
const featureSlice = createSlice({
  name:"fetchFeatureSlice",
  initialState,
  reducers:{
    getFeatureData:(state,action)=>{
      return {...state,data:action.payload}
    },
    featureFetchRejected:(state,action)=>{
      return {...state,errorMsg:action.payload}
    }
  }
})

export const {getFeatureData,featureFetchRejected} = featureSlice.actions;
export default featureSlice.reducer;
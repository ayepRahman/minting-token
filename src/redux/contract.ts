import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: { contract: any } = {
  contract: null,
};

export const contractSlice = createSlice({
  name: "smartContract",
  initialState,
  reducers: {
    setContract: (state, action) => {
      state.contract = action.payload;
    },
  },
});

// Selector
export const selectContract = (state: RootState) => state.contract.contract;
// Action
export const { setContract } = contractSlice.actions;
// Reducer
export default contractSlice.reducer;

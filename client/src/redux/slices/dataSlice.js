import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], 
  error: null,
  loading: false,
};

const dataSlice = createSlice({
  name: "data", 
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
        console.log(action.payload);
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchUpdateDataStart: (state) => {
      state.loading = true;
    },
    fetchUpdateDataSuccess: (state, action) => {
        console.log(action.payload);
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUpdateDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure ,fetchUpdateDataFailure,fetchUpdateDataStart,fetchUpdateDataSuccess } = dataSlice.actions;
export default dataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const HostelSlice = createSlice({
  name: "Hostel",
  initialState: {
    status: STATUSES.IDLE,
    data: [],
    filters: {
      priceRange: { min: null, max: null },
      category: null,
      // Add other filters as needed
    },
  },
  reducers: {
    addHostel: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
    },
  },
});

export const { addHostel, setStatus, setPriceFilter, setCategoryFilter } = HostelSlice.actions;
export default HostelSlice.reducer;

//thunk functions for promise fetching data
export function fetchHostels() {
  return async function fetchHostelThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      console.log(data)
      dispatch(addHostel(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log("Error while fetching data :", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

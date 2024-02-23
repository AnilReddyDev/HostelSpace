import { configureStore } from "@reduxjs/toolkit";
import HostelReducer from "../features/HostelSlice"

export const store = configureStore({
    reducer:{
        hostel:HostelReducer,
    }
})



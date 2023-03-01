import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";

const store = configureStore({
    reducer: {
        //Adding slice to store
        sidebar: sideBarSlice,
    }
});

export default store;
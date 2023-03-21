import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sideBarSlice from "./sideBarSlice";

const store = configureStore({
    reducer: {
        //Adding slice to store
        sidebar: sideBarSlice,
        search: searchSlice,
    },
});

export default store;
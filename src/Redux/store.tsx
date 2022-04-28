import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./albums";
import sidebarReducer from "./sidebar";

const store = configureStore({
  reducer: { albums: albumsReducer, sidebarOpen: sidebarReducer },
});

export default store;
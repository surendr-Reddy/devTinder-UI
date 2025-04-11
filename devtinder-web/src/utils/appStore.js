import { configureStore } from "@reduxjs/toolkit";
import profileUserReducer from "./profileSlice"


const appStore= configureStore({
    reducer:{
      user:profileUserReducer

    }
})
export default appStore;
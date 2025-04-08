import { configureStore } from "@reduxjs/toolkit";
import profileUserReducer from "./profileSlice"


const appStore= configureStore({
    reducer:{
      profileData:profileUserReducer

    }
})
export default appStore;
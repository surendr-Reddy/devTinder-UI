import { configureStore } from "@reduxjs/toolkit";
import profileUserReducer from "./profileSlice"
import updateUserReducer from "./updateUserSlice";


const appStore= configureStore({
    reducer:{
      user:profileUserReducer,
      updateUser:updateUserReducer,
    }
})
export default appStore;
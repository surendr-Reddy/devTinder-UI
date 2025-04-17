import { createSlice } from '@reduxjs/toolkit'
import React from 'react'



    const updateProfileSlice= createSlice({
        name:"updateUser",
        initialState:null,
        reducers:{
            updateUser:(state,action)=>{
                console.log("hi");
                
                return action.payload
            }
        }
    })


export const {updateUser} = updateProfileSlice.actions
export default updateProfileSlice.reducer

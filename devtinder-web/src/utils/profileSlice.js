import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profileUser",
  initialState: null,
  reducers: {
    addProfileUser: (state, action) => { return action.payload },
    removeProfileUser: () => {
      return null
    }
  },
});
export const { addProfileUser, removeProfileUser } = profileSlice.actions
export default profileSlice.reducer

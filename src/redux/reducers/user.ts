import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  id: number;
  firstName: string;
  lastName: string;
}

const initialState: IUserState = {
  id: 1,
  firstName: "Bobby",
  lastName: "Kartanegara",
};

export const User = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const { updateFirstName } = User.actions;
export default User.reducer;

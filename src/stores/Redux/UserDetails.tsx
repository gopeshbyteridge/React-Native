import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface userData {
  UserName: string;
  Email: string;
  Location: string;
}
const initialState: userData = {
  UserName: '',
  Email: '',
  Location: '',
};

const UserSlice = createSlice({
  name: 'UserDeatils',
  initialState,
  reducers: {
    setuser: (state, action: PayloadAction<any>) => {
      state.Email = action.payload.Email;
      state.Location = action.payload.Location;
      state.UserName = action.payload.UserName;
    },
    // updateUser: (state, action: PayloadAction<any>) => {
    //   state.user = action.payload;
    // },
  },
});

export const {setuser} = UserSlice.actions;
export default UserSlice.reducer;

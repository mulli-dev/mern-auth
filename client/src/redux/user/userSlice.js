import { createSlice } from "@reduxjs/toolkit";

//here is userslice basically a piece of state, loading, error, current user = false)
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user", //name of the slice
  initialState,
  reducers: {
    //reducers are the functions we wanna add eg signstart, sign succuess, signfalse, incement, decrement etc
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false; // its false because data fetching was successful
      state.error = false; // error is false because its data is successful
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
//export them to be used as aglobal state all actions but they are inside user slice

export default userSlice.reducer;
// export reducer which is inside userSlice and reducer to the store now its name is userReducer

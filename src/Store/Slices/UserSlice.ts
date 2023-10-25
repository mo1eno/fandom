import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserSlice {
  role: string;
  loading: boolean;
  error: string;
}

const initialState: UserSlice = {
  role: "user",
  loading: false,
  error: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess() {},
    loginError() {},
    loginProcess(state, action: PayloadAction<any>) {
      state.role = action.payload.role;
    },
  },
});
export default userSlice.reducer;

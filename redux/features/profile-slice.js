import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  profiles: [],
};

export const profile_slice = createSlice({
  name: "profiles",
  initialState: initial_state,
  reducers: {
    set_profiles_array: (state, action) => {
      state.profiles = action.payload;
    },
  },
});

export const { set_profiles_array } = profile_slice.actions;
export default profile_slice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import profile_reducer from './features/profile-slice';

export const store = configureStore({
    reducer: {
        profiles: profile_reducer
    }
})
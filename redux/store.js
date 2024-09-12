import { configureStore } from "@reduxjs/toolkit";
import onboardingStudentsSlice from "./slices/onboardingStudentsSlice";

export const store = configureStore({
    reducer:{
        onboarding:onboardingStudentsSlice
    }
})
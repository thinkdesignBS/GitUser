import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users";
import reposReducer from "./features/repos";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        repos: reposReducer,
    },
});
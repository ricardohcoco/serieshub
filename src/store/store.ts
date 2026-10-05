import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import { saveFavorites } from "../utils/localStorage";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
});

store.subscribe(() => {
    saveFavorites(store.getState().favorites);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
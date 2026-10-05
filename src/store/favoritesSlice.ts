import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SerieType } from "../types/SerieType";
import { loadFavorites } from "../utils/localStorage";

const initialState: SerieType[] = loadFavorites();

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<SerieType>) => {
            return [...state, action.payload];
        },

        removeFavorite: (state, action: PayloadAction<number>) => {
            return state.filter(
                (favorite) => favorite.id !== action.payload
            );
        },

        clearFavorites: () => {
            return [];
        },
    },
});

export const {
    addFavorite,
    removeFavorite,
    clearFavorites
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
import { addFavorite, clearFavorites, removeFavorite } from "../store/favoritesSlice";
import type { SerieType } from "../types/SerieType";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export function useFavorites() {
    const dispatch = useAppDispatch();

    const favorites = useAppSelector(
        (state) => state.favorites
    );

    const isFavorite = (serieId: number) => {
        return favorites.some(
            (favorite) => favorite.id === serieId
        );
    };

    const toggleFavorite = (serie: SerieType) => {
        if (isFavorite(serie.id)) {
            dispatch(removeFavorite(serie.id));
        } else {
            dispatch(addFavorite(serie));
        }
    };

    const clearAllFavorites = () => {
        dispatch(clearFavorites());
    };

    return {
        favorites,
        isFavorite,
        toggleFavorite,
        clearAllFavorites
    }
}
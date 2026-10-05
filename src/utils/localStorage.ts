import type { SerieType } from "../types/SerieType";

export function loadFavorites(): SerieType[] {
    const savedFavorites = localStorage.getItem("favorites");

    if (!savedFavorites) {
        return []
    }

    try {
        return JSON.parse(savedFavorites);
    } catch {
        return [];
    }
}

export async function saveFavorites(favorites: SerieType[]) {
    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}
import type { SerieResponseType } from "../types/SerieResponseType";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const URL = import.meta.env.VITE_API_SEARCH;

export async function getSearchSeries(query: string): Promise<SerieResponseType> {
    const response = await fetch(`${URL}?query=${encodeURIComponent(query)}&language=pt-BR`, {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error("API_ERROR");
    }

    const data = await response.json();

    return data;
}
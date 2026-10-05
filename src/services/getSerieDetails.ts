import type { SerieDetailsType } from "../types/SerieDetailsType";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const URL = import.meta.env.VITE_API_DETAILS;

export async function getSerieDetails(id: number): Promise<SerieDetailsType> {
    const response = await fetch(`${URL}/${id}?language=pt-BR`, {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`
        },
    });

    if (!response.ok) {
        throw new Error("API_ERROR");
    }

    const data = await response.json();

    return data;
} 
import type { SerieType } from "./SerieType";

export type SerieResponseType = {
    page: number;
    results: SerieType[];
    total_pages: number;
    total_results: number;
};
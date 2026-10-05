import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import type { SerieType } from "../../types/SerieType";
import { getPopularSeries } from "../../services/getPopularSeries";
import { getSearchSeries } from "../../services/getSearchSeries";
import SeriesList from "../../components/SeriesList";
import SearchBar from "../../components/SearchBar";
import Spinner from "../../components/Spinner";

export default function HomePage() {
    const [series, setSeries] = useState<SerieType[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);

    useEffect(() => {
        async function loadSeries() {
            setLoading(true);
            try {
                const data = await getPopularSeries();
                setSeries(data.results)
                setError("");
            } catch {
                setError("Erro ao conectar com a API!");
            } finally {
                setLoading(false);
            }
        }
        loadSeries();
    }, []);

    const handleSearch = async (query: string) => {
        setSearchLoading(true)

        try {
            const data = await getSearchSeries(query);
            setSeries(data.results)
            setError("");
        } catch {
            setError("Erro ao conectar com a API!");
        } finally {
            setSearchLoading(false)
        }
    };

    return (
        <div className={styles.container}>

            <SearchBar onSearch={handleSearch} searchLoading={searchLoading} />

            {loading && <Spinner />}

            {!loading && error && <p>{error}</p>}

            {!loading && !error && series.length === 0 && (
                <p>Nenhuma série encontrada!</p>
            )}

            {!loading && !error && series.length > 0 && (
                <SeriesList series={series} />
            )}
        </div>
    )
}
import { useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
    onSearch: (query: string) => void;
    searchLoading?: boolean;
}

export default function SearchBar({ onSearch, searchLoading = false }: SearchBarProps) {
    const [serieInput, setSerieInput] = useState("")

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const query = serieInput.trim();

        if (!query) return;

        onSearch(query);
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type={styles.input}
                value={serieInput}
                onChange={(event) => setSerieInput(event.target.value)}
                placeholder="Pesquise uma série..."
            />

            <button type="submit" disabled={searchLoading}>
                {searchLoading ? "Buscando" : "Pesquisar"}
            </button>
        </form>
    )
}
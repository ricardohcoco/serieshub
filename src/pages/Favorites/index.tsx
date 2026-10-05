import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import { useState } from "react";
import styles from "./Favorites.module.css";
import { IoMdArrowBack } from "react-icons/io";
import SearchBar from "../../components/SearchBar";
import SeriesList from "../../components/SeriesList";

export default function Favorites() {
  const { favorites, clearAllFavorites } = useFavorites();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredFavorites = favorites.filter((serie) =>
    serie.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <div className={styles.container}>
      <h1>Séries Favoritas</h1>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <IoMdArrowBack /> Voltar
      </button>

    <div className={styles.search}>
        <SearchBar onSearch={handleSearch} />
    </div>

    {favorites.length > 0 && (
        <button className={styles.clearButton} type="button" onClick={clearAllFavorites}>
            Limpar Favoritos
        </button>
    )}

    {favorites.length === 0 ? (
        <h2 className={styles.message}>
            Você ainda não adicionou nenhuma série aos favoritos!
        </h2>
    ) : filteredFavorites.length === 0 ? (
        <h2 className={styles.message}>
            Nenhum favorito encontrado para essa busca.
        </h2>
    ) : (
        <SeriesList series={filteredFavorites} />
    )}
    </div>
  );
}

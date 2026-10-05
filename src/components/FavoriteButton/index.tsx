import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../../hooks/useFavorites";
import type { SerieType } from "../../types/SerieType";
import styles from "./FavoriteButton.module.css";

type SerieCardType = {
  serie: SerieType;
};

export default function FavoriteButton({ serie }: SerieCardType) {
const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(serie.id)
  
return (
    <button
      type="button"
      className={styles.favorite}
      onClick={() => toggleFavorite(serie)}
      aria-label={
        favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
    >
      {favorite ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </button>
  );
}

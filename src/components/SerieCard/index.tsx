import { Link } from "react-router-dom";
import type { SerieType } from "../../types/SerieType";
import styles from "./SerieCard.module.css";
import { IMG_URL } from "../../constants/api";
import fallBackImage from "../../assets/lupa.png";
import { FaRegStar } from "react-icons/fa";
import FavoriteButton from "../FavoriteButton";

type SerieCardType = {
  serie: SerieType;
};

export default function SerieCard({ serie }: SerieCardType) {
  

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/serie/${serie.id}`}>
        <img
          className={styles.image}
          src={
            serie.poster_path ? `${IMG_URL}${serie.poster_path}` : fallBackImage
          }
          alt={serie.name}
        />

        <h2>{serie.name}</h2>
        <strong>Avaliação: </strong>
        <FaRegStar />
        <p>
          {serie.vote_average > 0 ? serie.vote_average.toFixed(1) : "Sem Avaliação"}
        </p>
      </Link>

      <FavoriteButton serie={serie} />
    </div>
  );
}

import { useEffect, useState } from "react";
import styles from "./SerieDetails.module.css";
import type { SerieDetailsType } from "../../types/SerieDetailsType";
import { useNavigate, useParams } from "react-router-dom";
import { getSerieDetails } from "../../services/getSerieDetails";
import { IoMdArrowBack } from "react-icons/io";
import { IMG_URL } from "../../constants/api";
import fallbackImage from "../../assets/lupa.png";
import { FaRegStar } from "react-icons/fa";
import FavoriteButton from "../../components/FavoriteButton";
import Spinner from "../../components/Spinner";

export default function SerieDetails() {
  const [serie, setSerie] = useState<SerieDetailsType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSerie() {
      setLoading(true);

      try {
        if (!id) {
          setError("Série inválida!");
          return;
        }

        const data = await getSerieDetails(Number(id));
        setSerie(data);
        setError("");
      } catch {
        setError("Erro ao carregar detalhes da série!");
      } finally {
        setLoading(false);
      }
    }
    loadSerie();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!serie) {
    return null;
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <IoMdArrowBack /> Voltar
      </button>

      <h1>{serie.name}</h1>

      <section className={styles.content}>
        <img
          src={
            serie.poster_path ? `${IMG_URL}${serie.poster_path}` : fallbackImage
          }
          alt={serie.name}
          className={styles.cover}
        />

        <div className={styles.info}>
          {serie.tagline && (
            <div className={styles.tagline}>
              <h3>{serie.tagline}</h3>
            </div>
          )}

          <div className={styles.rating}>
            <strong>Avaliação: </strong>
            <FaRegStar />

            <p>
              {serie.vote_average > 0
                ? serie.vote_average.toFixed(1)
                : "Sem Avaliação"}
            </p>
          </div>

          <p className={styles.genres}>
            <strong>Gênero: </strong>
            {serie.genres.length > 0
              ? serie.genres.map((genre) => genre.name).join(", ")
              : "Não Informado"}
          </p>

          <div className={styles.overview}>
            <strong>Sinopse: </strong>
            {serie.overview || "Não disponível"}
          </div>

          <FavoriteButton serie={serie} />
        </div>
      </section>
    </div>
  );
}

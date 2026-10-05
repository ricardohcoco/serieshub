import type { SerieType } from "../../types/SerieType";
import SerieCard from "../SerieCard";
import styles from "./SeriesList.module.css";

type SeriesListProps = {
    series: SerieType[];
}

export default function SeriesList({ series }: SeriesListProps) {
    return (
        <section className={styles.container}>
            {series.map((serie) => (
                <SerieCard key={serie.id} serie={serie} />
            ))}
        </section>
    )
}
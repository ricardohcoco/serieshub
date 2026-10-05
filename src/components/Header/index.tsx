import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { TbDeviceTvOld } from "react-icons/tb";

export default function Header() {
    return (
        <header className={styles.header}>      
            <Link to="/" className={styles.link}>
                <TbDeviceTvOld />
                <h1>SeriesHub</h1>
            </Link>

            <Link to="/favorites" className={styles.link}>
                Favoritos
            </Link>
        </header>
    )
}
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Desenvolvido por Ricardo</p>
            <p>Dados Fornecidos pela API do TMDB</p>
        </footer>
    )
}
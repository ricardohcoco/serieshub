import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./PageDefault.module.css";
import Footer from "../../components/Footer";

export default function PageDefault() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

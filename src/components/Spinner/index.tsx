import styles from "./Spinner.module.css";
import { ImSpinner8 } from "react-icons/im";

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner8 className={styles.icon} />
        </div>
    )
}
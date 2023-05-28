import styles from "./styles.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.modulo}>
            <p className={styles.text_primary}>
            Módulos:
            </p>
        </div>
    );
}
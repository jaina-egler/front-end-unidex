import styles from "./styles.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.main}>
            <div className={styles.main_text_image}>
                <div className={styles.main_text}>
                    <p className={styles.main_text_primary}>
                        Gerencie suas frotas
                    </p>
                    <p className={styles.main_text_secondary}>
                        Aumente a eficiência operacional da sua empresa e tome decisões mais inteligentes.                </p>
                </div>
                <div className={styles.main_image}> <div className={styles.main_celular}>

</div>
                    <div className={styles.main_computador}>

                    </div>
                   
                </div>
            </div>
        </div>
    );
}
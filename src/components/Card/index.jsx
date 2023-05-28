import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ titulo, caminho_icone, width, children }) {

    return (
        <div className={styles.card} style={{width: width || 300}}>
            <div className={styles.titulo}>
                <h2>{titulo}</h2>
                {caminho_icone && (<Image src={caminho_icone} width={24} height={24}/>)}
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}
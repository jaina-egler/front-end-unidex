import Image from "next/image"
import styles from "./styles.module.css"

export default function Footer() {
   return (
      <div className={styles.container__footer}>
         <div className={styles.container__logo}>
            <img src="/logo-fslab-branca.svg" alt="Logotipo do Laboratório de Fábricas de Software" />
            <Image src={"/logo-unidex.svg"} height={46} width={120}></Image>
         </div>

         <p className={styles.font} style={{ marginTop: 24 }}>© 2023 CargoFlow. Todos os direitos reservados.</p>

         <div className={styles.container__info}>

            <div className={styles.flex__info}>
               <h2 className={styles.font2}>Siga-nos</h2>
               <a href="#" className={styles.font} style={{ fontSize: 11, marginTop: 8 }}>Instagram</a>
            </div>

            <div className={styles.flex__info}>
               <h2 className={styles.font2}>Legal</h2>
               <a href="#" className={styles.font} style={{ fontSize: 11, marginTop: 8 }}>Uso</a>
               <a href="#" className={styles.font} style={{ fontSize: 11 }}>Privacidade</a>
            </div>

            <div className={styles.flex__info}>
               <h2 className={styles.font2}>Visite-nos</h2>
               <p className={styles.font} style={{ fontSize: 11, marginTop: 8, width: 216 }}>Rodovia BR 174, KM 3, nº4334, Zona Urbana, Vilhena, Rondônia.</p>
            </div>
         </div>
      </div>
   )
}
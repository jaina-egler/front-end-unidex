import styles from "./styles.module.css"

function Tr({ children }) {
  return (
    <tr className={styles.table_row}>
      {children}
    </tr>
  )
}

export default Tr
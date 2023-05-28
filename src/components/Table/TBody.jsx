import styles from "./styles.module.css"

function TBody({ children }) {
  return (
    <tbody className={styles.table_body}>
      {children}
    </tbody>
  )
}

export default TBody
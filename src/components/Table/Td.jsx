import styles from "./styles.module.css"

function Td({ children }){
  return(
    <td className={styles.table_cell}>
      {children}
    </td>
  )
}

export default Td
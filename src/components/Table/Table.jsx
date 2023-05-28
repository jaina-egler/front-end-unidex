import styles from "./styles.module.css"
 
function Table({ children }) {
	return (
		<table className={styles.table}>
			{children}
		</table>
	)
}

export default Table
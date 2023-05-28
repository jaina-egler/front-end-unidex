import styles from "./styles.module.css"

function THead({children}) {
	return (
		<thead className={styles.table_head}>
			{children}
		</thead>
	)
}

export default THead
import styles from './footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>© {new Date().getFullYear()} seal point.</p>
		</footer>
	);
}

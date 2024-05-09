import styles from './socials.module.scss';

export default function Socials() {
	return (
		<div className={styles.socials}>
			<a className={styles.social} href="https://www.instagram.com/sealpointband/">
				instagram
			</a>
			<a className={styles.social} href="https://www.tiktok.com/@sealpointband">
				tiktok
			</a>
			<a className={styles.social} href="https://twitter.com/sealpointband">
				twitter
			</a>
			<a className={styles.social} href="https://www.youtube.com/@sealpointband">
				youtube
			</a>
		</div>
	);
}

import styles from './spotify.module.scss';

export default function Spotify() {
	return (
		<>
			<iframe
				className={styles.spotify}
				src="https://open.spotify.com/embed/artist/1JJ1ZAHrkXbR1IlMWDlsLg?utm_source=generator"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
			{/* <iframe
				className={styles.spotify}
				src="https://open.spotify.com/embed/artist/1JJ1ZAHrkXbR1IlMWDlsLg?utm_source=generator"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe> */}
		</>
	);
}

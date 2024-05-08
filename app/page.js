import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<Image src="/Logo_Black.svg" alt="logo" width={200} height={200} />
		</main>
	);
}

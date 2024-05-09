import Image from 'next/image';
import styles from './page.module.scss';
import Socials from './components/Socials/socials';

export default function Home() {
	return (
		<main className={styles.main}>
			<img className={styles.logo} src="/Logo_Red.svg" alt="logo" />
			<Socials />
		</main>
	);
}

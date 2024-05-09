import styles from './page.module.scss';
import Socials from './components/Socials/socials';
import WhoAreWe from './components/WhoAreWe/whoAreWe';
import Image from 'next/image';

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.logo}>
				<Image src="/Logo_Red.svg" alt="logo" width={0} height={0} style={{ width: '100%', height: '100%' }} priority />
			</div>
			<Socials />
			<WhoAreWe />
		</div>
	);
}

import { Instagram } from '@/app/icons/instagram';
import styles from './socials.module.scss';
import { Tiktok } from '@/app/icons/tiktok';
import { Twitter } from '@/app/icons/twitter';
import { Youtube } from '@/app/icons/youtube';

export default function Socials() {
	return (
		<div className={styles.socials}>
			<a className={styles.social} href="https://www.instagram.com/sealpointband/">
				<Instagram width={40} height={40} />
				<p className={styles.social_name}>instagram</p>
			</a>
			<a className={styles.social} href="https://www.tiktok.com/@sealpointband">
				<Tiktok width={40} height={40} />
				<p className={styles.social_name}>tiktok</p>
			</a>
			<a className={styles.social} href="https://twitter.com/sealpointband">
				<Twitter width={40} height={40} />
				<p className={styles.social_name}>twitter</p>
			</a>
			<a className={styles.social} href="https://www.youtube.com/@sealpointband">
				<Youtube width={40} height={40} />
				<p className={styles.social_name}>youtube</p>
			</a>
		</div>
	);
}

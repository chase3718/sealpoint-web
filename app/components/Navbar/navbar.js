import Image from 'next/image';
import styles from './navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<span className={styles.navbar_logo}>
				<Image className={styles.image} src="/Logo.svg" alt="logo" width={45} height={45} />
				<h1 className={styles.name}>seal point.</h1>
			</span>
			<ul className={styles.navbar_links}>
				<Link className={styles.link} href="/">
					home
				</Link>
				{/* <Link className={styles.link} href="/about">
					about
				</Link>
				<Link className={styles.link} href="/contact">
					contact
				</Link> */}
			</ul>
		</div>
	);
}

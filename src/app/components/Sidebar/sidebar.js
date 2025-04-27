import Image from 'next/image';

import styles from './sidebar.module.scss';

export default function Sidebar() {
	return (
		<section className={styles.sidebar}>
			<Image
				className={styles.logo}
				src="/sealpoint_yarn_logo_red.png"
				alt="logo"
				width={300}
				height={140}
				// style={{ width: '100px', height: '100%' }}
				priority
			/>
			<nav className={styles.hrefs}>
				<a className={styles.header_href} href="/news">
					<h1 className={styles.nav}>news</h1>
				</a>
				<a className={styles.header_href} href="/band">
					<h1 className={styles.nav}>band</h1>
				</a>
				<a className={styles.header_href} href="/media">
					<h1 className={styles.nav}>media</h1>
				</a>
				<a className={styles.header_href} href="/links">
					<h1 className={styles.nav}>links</h1>
				</a>
				<a className={styles.header_href} href="/merch">
					<h1 className={styles.nav}>merch</h1>
				</a>
				<a className={styles.header_href} href="/tickets">
					<h1 className={styles.nav}>BUY TICKETS</h1>
				</a>
			</nav>
		</section>
	);
}

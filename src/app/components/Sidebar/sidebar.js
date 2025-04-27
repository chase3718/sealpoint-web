import Image from 'next/image';

import styles from './sidebar.module.scss';

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Image className={styles.logo} src="/sealpoint_yarn_logo_red.png" alt="logo" width={300} height={140} priority />
			<nav className={styles.hrefs}>
				<a className={styles.header_href} href="/news">
					<div className={styles.bounce}>
						<h4 className={styles.nav}>news</h4>
					</div>
				</a>
				<a className={styles.header_href} href="/band">
					<div className={styles.bounce}>
						<h4 className={styles.nav}>band</h4>
					</div>
				</a>
				<a className={styles.header_href} href="/media">
					<div className={styles.bounce}>
						<h4 className={styles.nav}>media</h4>
					</div>
				</a>
				<a className={styles.header_href} href="/links">
					<div className={styles.bounce}>
						<h4 className={styles.nav}>links</h4>
					</div>
				</a>
				<a className={styles.header_href} href="/merch">
					<div className={styles.bounce}>
						<h4 className={styles.nav}>merch</h4>
					</div>
				</a>
				<a className={styles.header_href} href="/tickets">
					<div className={styles.bounce}>
						<h4 className={`${styles.nav}  ${styles.shimmer}`}>BUY TICKETS</h4>
					</div>
				</a>
			</nav>
			<div className={styles.filler} />
		</aside>
	);
}

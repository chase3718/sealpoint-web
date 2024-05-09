'use client';

import Image from 'next/image';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { Menu } from '@/app/icons/menu';
import { useState } from 'react';
import { Close } from '@/app/icons/close';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<div className={styles.navbar}>
				<Link className={styles.navbar_logo} href="/">
					<Image className={styles.image} src="/Logo.svg" alt="logo" width={45} height={45} />
					<h1 className={styles.name}>seal point.</h1>
				</Link>
				<ul className={styles.navbar_links}>
					<Link className={styles.link} href="/">
						home
					</Link>
					<Link className={styles.link} href="/about">
						about
					</Link>
					<Link className={styles.link} href="/contact">
						contact
					</Link>
				</ul>
				<div className={styles.hamburger_menu}>
					{!menuOpen && (
						<button className={styles.hamburger_menu_button} onClick={() => setMenuOpen(true)}>
							<Menu />
						</button>
					)}
					{menuOpen && (
						<div className={styles.hamburger_menu_overlay}>
							<button className={styles.hamburger_menu_close_button}>
								<Close onClick={() => setMenuOpen(false)} />
							</button>
							<ul className={styles.hamburger_menu_list}>
								<Link className={styles.hamburger_link} onClick={() => setMenuOpen(false)} href="/">
									home
								</Link>
								<Link className={styles.hamburger_link} onClick={() => setMenuOpen(false)} href="/about">
									about
								</Link>
								<Link className={styles.hamburger_link} onClick={() => setMenuOpen(false)} href="/contact">
									contact
								</Link>
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

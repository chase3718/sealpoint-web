'use client';
import { useEffect, useState } from 'react';
import styles from './footer.module.scss';

export default function Footer() {
	const [year, setYear] = useState();
	useEffect(() => {
		setYear(new Date().getFullYear());
		console.log('poop');
	});

	return (
		<footer className={styles.footer}>
			<p>© {year} seal point.</p>
		</footer>
	);
}

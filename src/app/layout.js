import localFont from 'next/font/local';
import { Creepster, Rubik_Distressed } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';
import styles from './layout.module.scss';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Sidebar from './components/Sidebar/sidebar';

export const metadata = {
	title: 'Seal Point',
	discription: 'The official website of Seal Point. Tickets on presale now.',
};

const futura = localFont({
	src: [
		{ path: '../../public/font/Futura Heavy font.ttf', weight: '800' },
		{ path: '../../public/font/Futura Bold font.ttf', weight: '700' },
		{ path: '../../public/font/Futura Book font.ttf', weight: '300' },
	],
	weight: '300 700 800',
	display: 'swap',
	variable: '--font-futura',
});

const creepster = Creepster({
	display: 'swap',
	weight: '400',
	variable: '--font-creepster',
});

const rubik_dis = Rubik_Distressed({
	display: 'swap',
	weight: '400',
	variable: '--font-rubik-distressed',
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${futura.variable} ${creepster.variable} ${rubik_dis.variable}`}>
			<body>
				<section className={styles.main_content}>
					<Sidebar></Sidebar>
					{children}
				</section>
				<Footer></Footer>
				<GoogleAnalytics gaId="G-BXC34PZMJT " />
			</body>
		</html>
	);
}

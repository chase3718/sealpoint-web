import localFont from '@next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

export const metadata = {
	title: 'Seal Point',
	description: 'The official website of Seal Point',
};

const futura = localFont({
	src: [
		{ path: '../public/font/Futura Heavy font.ttf', weight: '800' },
		{ path: '../public/font/Futura Bold font.ttf', weight: '700' },
		{ path: '../public/font/Futura Book font.ttf', weight: '300' },
	],
	weight: '300 700 800',
	display: 'swap',
	variable: 'Futura',
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={futura.className}>
			<body>
				{/* <Navbar /> */}
				{children}
				<Footer />
				<GoogleAnalytics gaId="G-BXC34PZMJT " />
			</body>
		</html>
	);
}

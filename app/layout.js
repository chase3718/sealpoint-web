import { Inter } from 'next/font/google';
import localFont from '@next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Seal Point',
	description: 'The official website of Seal Point',
};

const futura = localFont({
	src: [{ path: '../public/font/Futura Heavy font.ttf', weight: '600', style: 'normal', format: 'truetype' }],
	src: [{ path: '../public/font/Futura Book font.ttf', weight: '300', style: 'normal', format: 'truetype' }],

	display: 'swap',
	variable: 'Futura',
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={futura.className}>
			<body>
				<Navbar />
				{children}
				<Footer />
				<GoogleAnalytics gaId="G-BXC34PZMJT " />
			</body>
		</html>
	);
}

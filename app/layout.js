import { Inter } from 'next/font/google';
import localFont from '@next/font/local';
import './globals.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Seal Point',
	description: 'The official website of Seal Point',
};

const futura = localFont({
	src: [{ path: '../public/font/Futura Heavy font.ttf', format: 'truetype' }],
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
			</body>
		</html>
	);
}

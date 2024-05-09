import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Seal Point',
	description: 'The official website of Seal Point',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

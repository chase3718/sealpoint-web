import Image from 'next/image';

import styles from './whoAreWe.module.scss';

export default function WhoAreWe() {
	return (
		<div className={styles.description}>
			<div className={styles.text}>
				<h1>who are we?</h1>
				<p>
					Seal Point is a &quot;Post-Core&quot; band hailing from North Brunswick, New Jersey. Formed in 2022, Seal
					Point has been making waves in the local New Jersey music scene with their unique blend of emotional lyrics,
					powerful instrumentals, and intense stage presence. The band draws inspiration from bands such as Taking Back
					Sunday, Dance Gavin Dance, and Deftones to create their signature sound that combines elements of
					post-hardcore, emo, and alternative rock.
				</p>
			</div>
			<div className={styles.image}>
				<Image
					src="/Studio-20.jpg"
					alt="seal point"
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
					priority
				/>
			</div>
		</div>
	);
}

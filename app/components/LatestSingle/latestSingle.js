import React from 'react';

export default function LatestSingle() {
	return (
		<div>
			<h1>Latest Single</h1>
			<iframe
				src="https://open.spotify.com/embed/track/your_track_id"
				width="300"
				height="380"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
			></iframe>
		</div>
	);
}

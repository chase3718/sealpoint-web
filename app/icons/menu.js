import React from 'react';

export function Menu(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" {...props}>
			<path fill={props.color ? props.color : '#FFF'} d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
		</svg>
	);
}

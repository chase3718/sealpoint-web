<script lang="ts">
	const navItems = $state([
		{ name: 'home', path: '/home' },
		{ name: 'music', path: '/music' },
		{ name: 'videos', path: '/videos' },
		{ name: 'photos', path: '/photos' },
		{ name: 'bio', path: '/bio' },
		{ name: 'merch', path: '/merch' },
		{ name: 'contact', path: '/contact' },
		{ name: 'shows', path: '/shows' }
	]);
</script>

<nav class="navbar">
	<img alt="Logo" src="/sealpoint_yarn_logo_red.png" />
	<ul class="nav-list">
		{#each navItems as item}
			<li class="nav-item">
				<a href={item.path} class="nav-link">
					<h4>{item.name}</h4>
				</a>
			</li>
		{/each}
	</ul>
	<div class="filler"></div>
</nav>

<style lang="scss" scoped>
	.navbar {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--background-color);
		height: 100%;
		max-width: 240px;
		min-width: 144px;
		gap: 0.25rem;

		img {
			width: 100%;
		}
	}

	.nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.25rem;
	}

	.nav-item {
		display: inline-block;
		width: 100%;
		background-color: var(--secondary-bg-color);
		padding: 5px;
		height: fit-content;
		overflow: hidden;
		white-space: nowrap;
		transition: background-color 0.3s ease-in-out;
		font-family: 'Rubik Distressed', system-ui;

		&:hover {
			-webkit-text-stroke: 0.01rem var(--sealpoint-red-secondary);

			h4:after {
				content: '';
				width: 1rem;
				height: 1rem;
				background-image: url('/Logo.svg');
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
				display: inline-block;
				left: 0.2rem;

				@media (prefers-color-scheme: light) {
					background-image: url('/Logo_Black.svg');
				}
			}
		}
	}

	.nav-link {
		color: var(--main-font);
		text-decoration: none;
	}

	.filler {
		z-index: 0;
		width: 100%;
		height: 100%;
		background-image: url('/grad.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>

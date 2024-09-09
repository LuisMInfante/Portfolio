<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Luis Infante — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			Hey, I&apos;m Luis 👋  <br>
			I&apos;m a software engineer and a Computer Science student at UCF, passionate about building games and cool software experiences.
			Currently, I&apos;m involved in two research positions—one enhancing chip security at Silicon Assurance, and the other automating biological experiments with Argonne National Laboratory.
		</p>
		<p>
			When I&apos;m not coding, you can find me playing games like Kingdom Hearts, playing board games with my friends, or hanging out with my fellow engineers at Knight Hacks.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<!-- Handle Objects -->
							{#if typeof technology === 'object' && technology !== null}
								<a href={technology.url} target="_blank" rel="noopener noreferrer" class="skillWrapper" title={technology.alt}>
									<img src={technology.iconUrl ? technology.iconUrl : `https://skillicons.dev/icons?i=${technology.name}`} alt={technology.alt} class="skillIcon" />
								</a>
							<!-- Handle Strings -->
							{:else}
								<div class="skillString">{technology}</div>
							{/if}
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.skillWrapper {
		display: flex;
		align-items: center;
		text-decoration: none;
	}
	.skillIcon {
		height: 36px;
		border-radius: 8px;
		transition: transform 0.2s;
	}
	.skillIcon:hover {
		transform: scale(1.1);
	}
	.skillString {
		margin-bottom: 5px;
	}

	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: wrap;
		gap: 10px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>

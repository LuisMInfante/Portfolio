<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Luis Infante — About</title>
</svelte:head>

<div class="container">
	<main>
		<p class="greeting">
			Hey, I&apos;m Luis 👋  
		</p>
		<p class="description">
			I&apos;m a software engineer and a Computer Science student at UCF, passionate about building games and cool software experiences. Currently, I&apos;m involved in two research positions—one enhancing chip security at Silicon Assurance, and the other automating biological experiments with Argonne National Laboratory.
		</p>
		<p class="description">
			When I&apos;m not coding, you can find me playing games like Kingdom Hearts, playing board games with my friends, or hanging out with my fellow engineers at Knight Hacks.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>{section}:</h4>
					<div class="list">
						{#each technologies as technology}
							<!-- Handle Objects -->
							{#if typeof technology === 'object' && technology !== null}
								<a href={technology.url} target="_blank" rel="noopener noreferrer" class="skillWrapper" title={technology.alt}>
									<img 
										loading="lazy"
										src={technology.iconUrl ? technology.iconUrl : `https://skillicons.dev/icons?i=${technology.name}`} 
										alt={technology.alt} 
										class="skillIcon" 
									/>
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
.greeting {
	font-size: 36px;  
	font-weight: 700;
	margin: 30px 0 25px 0;
	text-align: start;
	color: #fff;
}

.description {
	font-size: 18px;
	font-weight: 400;
	line-height: 1.6;
	color: #fff;
	margin-bottom: 20px;
}

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
	padding: 0 20px;
}

h2 {
	margin-top: 50px;
}

.list {
	display: flex;
	flex-wrap: wrap; 
	gap: 10px;
}

@media (min-width: 900px) {
	.list {
		flex-direction: row;
	}
}

@media (max-width: 600px) {
	main {
		padding: 0 15px;
	}
}
</style>

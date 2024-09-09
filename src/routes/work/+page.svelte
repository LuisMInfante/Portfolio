<script>
	import works from '$lib/Works';
</script>

<svelte:head>
	<title>Luis Infante — Work</title>
</svelte:head>

<div class="workContainer">
	<div class="workEntries">
		<h1>My Work</h1>
		{#each works as work}
			<div class="work">
				<div class="header">
					<h2>{work.title}</h2>
					<div class="roleAndTime">
						<h3>{work.role}</h3>
						<span class="timeRange">({work.timeRange})</span>
					</div>
					<div class="techsContainer">
						<div class="techs">
							{#each work.technologies as tech}
								<a href={tech.url} target="_blank" rel="noopener noreferrer" class="techWrapper" title={tech.alt}>
									<img
										src={tech.iconUrl ? tech.iconUrl : `https://skillicons.dev/icons?i=${tech.name}`}
										alt={tech.alt}
										class="techIcon"
									/>
								</a>
							{/each}
						</div>
					</div>
				</div>
				<ul>
					{#each work.description as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
				<a href={work.url} target="_blank" rel="noreferrer">
					<div class="button">Work Url</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.workContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		padding: 1em;
		margin: -20px auto 0 auto;
	}

	.workEntries {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 40px; 
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
		font-size: 36px;
		margin: 0 0 50px 0; 
	}

	h2 {
		font-weight: 600;
		font-size: 24px;
		margin: 0;
	}

	.roleAndTime {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	h3 {
		font-weight: 400;
		color: #b0b0b0;
		margin: 0;
	}

	.timeRange {
		color: #b0b0b0;
		font-size: 14px;
		margin: 0;
	}

	.work {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 25px;
		transition: transform 0.2s ease-in-out;
	}

	.work ul {
		margin: 10px 0;
		list-style: disc;
		padding-left: 20px;
		color: #708090;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.techIcon {
		height: 36px;
		margin-right: 10px;
		border-radius: 8px;
		transition: transform 0.2s;
	}

	.techIcon:hover {
		transform: scale(1.1);
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
		margin-top: 10px;
	}

	@media (min-width: 900px) {
		.workContainer {
			padding: 0;
		}
		.workEntries > h1 {
			font-weight: 700;
			margin: 0 0 0 0;
			font-size: 36px;
			text-align: start;
		}

		.workEntries {
			grid-template-columns: 1fr;
		}

		.work {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.workEntries {
			grid-template-columns: 1fr;
		}
	}
</style>

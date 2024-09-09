<script>
	import works from '$lib/Works';
</script>

<svelte:head>
	<title>Luis Infante — Work</title>
</svelte:head>

<div class="workContainer">
	<div class="works">
		<h1>My Work</h1>
		<!-- <p class="note"></p> -->
		{#each works as work}
			<div class="work">
				<div class="header">
					<h2>
						{work.title}
					</h2>
					<div class="techsContainer">
						Technologies:
						<div class="techs">
							{#each work.technologies as tech}
								<div>{tech}</div>
							{/each}
						</div>
					</div>
				</div>
				<p>
					{work.description}
				</p>
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
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.note {
		opacity: 0.5;
		margin: 0;
		max-width: 900px;
		text-align: left;
	}

	a {
		text-decoration: none;
	}

	.workContainer .works {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
	}

	h2 {
		display: flex;
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
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.work p {
		font-weight: 100;
		color: #708090;
	}

	.works {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
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
	.techs > div {
		margin: 0 0 0 10px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
	}

	@media (min-width: 900px) {
		.workContainer {
			padding: 0;
		}
		.works > h1 {
			font-weight: 700;
    		margin: 0 0 0 0;
    		font-size: 36px;
    		text-align: start;
		}

		.works {
			grid-template-columns: 1fr;
		}

		.works .work {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.works {
			grid-template-columns: 1fr;
		}
	}
</style>

<script lang="ts">
	export let activePage = '';

	const isActive = (path: string): string => activePage === path ? 'text-primary' : 'text-secondary';
</script>

<style>
	.nav-item:hover {
		text-decoration: underline;
	}
</style>


<nav class="container mx-auto flex justify-center items-center space-x-8">
	<ul class="flex justify-center space-x-4">
		<li><a href="/" class={`nav-item ${isActive('/')}`}>About</a></li>
		<li><a href="/projects" class={`nav-item ${isActive('/projects')}`}>Projects</a></li>
		<li><a href="/work" class={`nav-item ${isActive('/work')}`}>Work</a></li>
	</ul>
</nav>
	
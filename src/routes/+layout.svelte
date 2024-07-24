<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';

	let activePage: string = '';

	onMount(() => {
		activePage = window.location.pathname;
	});
</script>

<div class="min-h-screen flex flex-col">
	<header class="mt-8">
		<Navbar {activePage} />
	</header>
	
	<main class="flex-grow">
		<slot></slot>
	</main>

</div>
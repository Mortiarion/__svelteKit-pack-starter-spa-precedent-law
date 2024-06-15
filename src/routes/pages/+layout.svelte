<script lang="ts">
	import '$lib/styles/app.css';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<div class='flex min-h-screen flex-col'>
	<Header />
	<main class='flex-auto pt-40 xl:pt-60'>
		<slot />
	</main>
	<Footer />
</div>
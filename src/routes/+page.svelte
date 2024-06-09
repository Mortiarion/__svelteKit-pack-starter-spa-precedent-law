<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import About_Us from '$lib/components/sections/About_us.svelte';
	import Our_Team from '$lib/components/sections/Our_team.svelte';
	import Our_Services from '$lib/components/sections/Our_services.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Fade_In_Out from '$lib/components/Fade_In_Out.svelte';
</script>

<div class="font-roboto">
	<Header />
	<main>
		<About_Us />
		<Our_Team />
		<Our_Services />
	</main>
	<Fade_In_Out duration={1000} threshold={0.2}>
		<Footer />
	</Fade_In_Out>
</div>

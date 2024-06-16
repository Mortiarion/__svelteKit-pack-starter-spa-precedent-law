<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import About_Us from '$lib/components/sections/About_us.svelte';
	import Our_Team from '$lib/components/sections/Our_team.svelte';
	import Our_Services_Mobile from '$lib/components/sections/Our_services_mobile.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Fade_In_Out from '$lib/components/Fade_In_Out.svelte';
	import Our_Services_Desktop from '$lib/components/sections/Our_services_desktop.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-auto pt-40 xl:pt-60">
		<About_Us />
		<Our_Team />
		<Our_Services_Desktop />
		<Our_Services_Mobile />
	</main>
	<Fade_In_Out duration={1000} threshold={0.2}>
		<Footer />
	</Fade_In_Out>
</div>

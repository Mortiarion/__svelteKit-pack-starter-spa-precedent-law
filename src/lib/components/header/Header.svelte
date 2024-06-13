<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Burger from './Burger.svelte';
	import Line from '$lib/base-components/Line.svelte';
	import Location from '$lib/components/header/Location.svelte';
	import Social from '$lib/components/header/Social.svelte';
	import Navigation from '$lib/components/header/Navigation.svelte';
</script>

<Section tag="header" classes="lg:bg-header_img_xl bg-no-repeat bg-center bg-cover">
	<Container
		classes="p-0 bg-header_img lg:bg-none bg-no-repeat bg-center bg-cover pb-8 pt-11 xl:px-20 xl:pt-8 xl:pb-14"
	>
		<div class="mb-5 flex items-center">
			<Logo classes="mx-auto xl:m-0" />
			<Navigation
				classes="bs:hidden xl:flex xl:ml-auto xl:gap-10 xl:text-xl 2xl:text-2xl 2xl:gap-20"
			/>
			<Social
				classes="xl:ml-16 2xl:ml-28 absolute opacity-0 -z-10 xl:opacity-100 xl:static xl:z-10 xl:flex xl:gap-5"
			/>
		</div>
		<Line classes="mb-5" />
		<Burger classes="xl:hidden" />
		<Location classes="px-8 mb-8 xl:mb-0 2xl:flex 2xl:flex-col 2xl:gap-5" />
		<Social classes="px-8 flex gap-5 sm:ml-5 xl:hidden" />
	</Container>
</Section>

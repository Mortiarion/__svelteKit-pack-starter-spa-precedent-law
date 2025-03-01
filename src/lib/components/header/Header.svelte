<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Burger from './Burger.svelte';
	import Line from '$lib/base-components/Line.svelte';
	import Location from '$lib/components/header/Location.svelte';
	import Social from '$lib/components/header/Social.svelte';
	import Navigation from '$lib/components/header/Navigation.svelte';
	import Image from '$lib/base-components/Image.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import { onMount } from 'svelte';

	let isVisible = true;
	let headerPaddingBottom = 'pb-8';

	onMount(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 100) {
				isVisible = false;
				headerPaddingBottom = 'pb-0';
			} else {
				isVisible = true;
				headerPaddingBottom = 'pb-8';
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class=" bg-cover bg-center bg-no-repeat lg:bg-header_img_xl bg-header_img">
	<div
		class={`container bs:pb-0 mx-auto p-0 px-8 pt-11 bs:max-w-screen-bs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:bg-none xl:max-w-screen-xl xl:px-20 xl:pt-8 2xl:max-w-screen-2xl ${headerPaddingBottom}`}
	>
		<div class="pb-5 flex items-center border-b border-header_line">
			<Logo classes="mx-auto xl:m-0" />
			<Navigation
				classes="bs:hidden xl:flex xl:ml-auto xl:gap-8 xl:text-base 2xl:text-2xl 2xl:gap-20"
			/>
			<Social classes="xl:ml-16 2xl:ml-28 absolute opacity-0 -z-10 xl:opacity-100 xl:static xl:z-10 xl:flex xl:gap-5"/>
		</div>
		<!-- <Line classes="mb-5" /> -->
		<Burger classes="xl:hidden" />

		<div
			class={`bs:hidden xl:block mt-5 mb-8 2xl:flex 2xl:flex-col 2xl:gap-5 ${isVisible ? '' : 'hidden'}`}
		>
			<div class="flex items-center gap-3">
				<Image src={'/img/location.png'} alt={'location-img'} />
				<Text classes="text-sm text-location_color lg:text-base">Місцезнаходження</Text>
			</div>
			<Paragraph classes="ml-[22px] text-white font-semibold lg:text-3xl font-source"
				>м.Одеса вул.Канатна, 68</Paragraph
			>
		</div>

		<!-- <Social classes="flex mt-8 pb-5 bs:justify-center md:justify-start md:ml-10 gap-5 sm:ml-5 xl:hidden" /> -->
	</div>
</header>

<style lang="postcss">
	header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		/* min-height: 284px; */
		z-index: 1000;
	}
	
	.hidden {
		/* height: 132px; */
		display: none;
	}

</style>

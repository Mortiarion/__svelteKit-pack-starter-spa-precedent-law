<script lang="ts">
	import Container from '$lib/base-components/Container.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Burger from './Burger.svelte';
	import Line from '$lib/base-components/Line.svelte';
	import Location from '$lib/components/header/Location.svelte';
	import Social from '$lib/components/header/Social.svelte';
	import Navigation from '$lib/components/header/Navigation.svelte';
	import { onMount } from 'svelte';

	let nav: HTMLElement;
	let lastScrollTop = 0;

	onMount(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			if (scrollTop > lastScrollTop) {
				// Скрол вниз
				nav.classList.add('scroll-down');
			} else {
				// Скрол вверх
				nav.classList.remove('scroll-down');
			}

			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll values
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header bind:this={nav} class="header lg:bg-header_img_xl bg-no-repeat bg-center bg-cover">
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
		<Location classes=" px-8 mb-8 xl:mb-0 2xl:flex 2xl:flex-col 2xl:gap-5" />
		<Social classes="px-8 flex gap-5 sm:ml-5 xl:hidden" />
	</Container>
</header>

<style lang="postcss">
	.header {
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 1000;
		background-color: transparent; /* Базовий фон, який буде прозорим */
		transition: background-color 0.3s ease, box-shadow 0.3s ease;
	}

	.sticky {
		background-color: white; /* Фон при скролі */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Додайте тінь для кращої видимості */
	}

	.location {
		transition: opacity 0.3s ease, transform 0.3s ease;
		opacity: 0;
	}

	.scroll-down .location {
		opacity: 0;
		transform: translateY(-100%);
	}
</style>

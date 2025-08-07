<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils/cn';
	import Location from '$lib/components/header/Location.svelte';
	import Social from '$lib/components/header/Social.svelte';
	import Image from '$lib/base-components/Image.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	export let classes: string = '';
	export let items = [
		{ href: '/#about_us', text: 'Про нас' },
		{ href: '/#our_team', text: 'Наші спеціалісти' },
		{ href: '/#our_services_mobile', text: 'Послуги' }
	];
	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
	function handleClickOutSide(event: MouseEvent) {
		if (event.target instanceof Element && !event.target.closest('.burger')) {
			isOpen = false;
		}
	}

	function closeBurger() {
		isOpen = false;
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutSide);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutSide);
	});
</script>

<div class={cn('burger', classes)}>
	<button class="absolute left-6 top-20 flex flex-col gap-[6px]" on:click={toggle} class:isOpen>
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</button>

	{#if isOpen}
		<ul class="flex flex-col gap-3 mt-8 mb-8 text-xl text-white burger-menu">
			{#each items as item}
				<li><a on:click={closeBurger} href={item.href}>{item.text}</a></li>
			{/each}
		</ul>
		<div
			class='mt-5 mb-8 xl:mb-0 2xl:flex 2xl:flex-col 2xl:gap-5'
		>
			<div class="flex items-center gap-3">
				<Image src={'/img/location.png'} alt={'location-img'} />
				<Text classes="text-sm text-location_color lg:text-base">Місцезнаходження</Text>
			</div>
			
			<a href="https://maps.app.goo.gl/xUyEcNoXyVjXmXeK9?g_st=ipc" class="ml-[22px] text-white font-semibold lg:text-3xl font-source">
				м. Одеса, вул. Мала Арнаутська, 30
			</a>
		</div>
		<Social classes="flex mt-8 pb-5 bs:justify-center md:justify-start md:ml-10 gap-2 sm:ml-5 xl:hidden" />
	{/if}
</div>

<style lang="postcss">
	.line {
		width: 28px;
		height: 2px;
		background-color: white;
		border-radius: 2px;
		transition: all 0.3s ease-in-out;
	}
	.isOpen .line:nth-child(1) {
		transform: rotate(45deg) translate(6px, 6px);
	}
	.isOpen .line:nth-child(2) {
		opacity: 0;
	}
	.isOpen .line:nth-child(3) {
		transform: rotate(-45deg) translate(6px, -5px);
	}
	.burger-menu {
		overflow: hidden;
		max-height: 0;
		animation: slideDown 0.5s forwards;
	}
	:global(.isOpen) .burger-menu {
		animation: slideDown 0.5s forwards;
	}

	@keyframes slideDown {
		from {
			max-height: 0;
		}
		to {
			max-height: 108px;
		}
	}
</style>

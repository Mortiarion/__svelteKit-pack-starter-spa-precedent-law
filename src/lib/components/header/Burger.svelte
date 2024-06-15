<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils/cn';
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
		<ul class="burger-menu mt-8 mb-8 flex flex-col gap-3 text-xl text-white">
			{#each items as item}
				<li><a on:click={closeBurger} href={item.href}>{item.text}</a></li>
			{/each}
		</ul>
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

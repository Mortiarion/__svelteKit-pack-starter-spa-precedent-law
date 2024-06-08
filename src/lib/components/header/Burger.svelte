<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { cn } from '$lib/utils/cn';
	export let classes: string = '';
	export let items = [
		{ href: '/', text: 'Про нас' },
		{ href: '/', text: 'Наші спеціалісти' },
		{ href: '/', text: 'Послуги' }
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

	onMount(() => {
		document.addEventListener('click', handleClickOutSide);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutSide);
	});
</script>

<div class={cn('burger', classes)}>
	<button class="absolute top-20 flex flex-col gap-2" on:click={toggle} class:isOpen>
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</button>

	{#if isOpen}
		<ul class="mb-8 flex flex-col gap-3 text-xl text-white ">
			{#each items as item}
				<li><a href={item.href}>{item.text}</a></li>
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
		transform: rotate(45deg) translate(7px, 7px);
	}
	.isOpen .line:nth-child(2) {
		opacity: 0;
	}
	.isOpen .line:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -7px);
	}
</style>

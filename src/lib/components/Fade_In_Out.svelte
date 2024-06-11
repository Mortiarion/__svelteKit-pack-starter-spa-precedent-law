<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let duration = 500;
	export let threshold = 0.1;

	let element: HTMLElement;
	const opacity = tweened(0, {
		duration: duration,
		easing: cubicOut
	});

	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				opacity.set(1);
			} else {
				opacity.set(0);
			}
		});
	};

	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(handleIntersection, {
			threshold: threshold
		});
		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={element} class="fade-section" style:opacity={$opacity}>
	<slot></slot>
</div>

<style>
	.fade-section {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;
	}
	/* .fade-section.visible {
		opacity: 1;
		transform: translateY(0);
	} */
</style>

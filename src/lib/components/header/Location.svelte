<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Image from '$lib/base-components/Image.svelte';

	export let classes: string = '';
</script>

<div class={cn('location', classes)}>
	<div class="flex items-center gap-3">
		<Image src={'/img/location.png'} alt={'location-img'} />
		<Text classes="text-sm text-location_color lg:text-base">знаходження</Text>
	</div>
	<Paragraph classes="ml-[22px] text-white font-semibold lg:text-3xl font-source"
		>м.Одеса вул.Канатна, 68</Paragraph
	>
</div>

<style lang='postcss'>
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
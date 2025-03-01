<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Image from '$lib/base-components/Image.svelte';

	export let classes: string = '';
</script>

<div class={cn('', classes)}>
	<div class="flex items-center gap-3">
		<Image src={'/img/location.png'} alt={'location-img'} />
		<Text classes="text-sm text-location_color lg:text-base">Місцезнаходження</Text>
	</div>
	<Paragraph classes="ml-[22px] text-white font-semibold lg:text-3xl font-source"
		>м.Одеса вул.Канатна, 68</Paragraph
	>
</div>

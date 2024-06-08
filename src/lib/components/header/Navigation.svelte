<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let classes: string = '';
	export let items = [
		{ href: '/', text: 'Про нас' },
		{ href: '/', text: 'Наші спеціалісти' },
		{ href: '/', text: 'Послуги' }
	];
</script>

<ul class={cn(' flex gap-3 text-xl text-white', classes)}>
	{#each items as item}
		<li><a href={item.href}>{item.text}</a></li>
	{/each}
</ul>

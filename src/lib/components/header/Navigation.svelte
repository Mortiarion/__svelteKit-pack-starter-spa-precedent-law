<script lang="ts">
	import { cn } from '$lib/utils/cn';
	export let classes: string = '';
	export let items = [
		{ href: '/#about_us', text: 'Про нас' },
		{ href: '/#our_team', text: 'Наші спеціалісти' },
		{ href: '/#our_services_desktop', text: 'Послуги' }
	];
</script>

<ul class={cn(' flex gap-3 text-xl text-white', classes)}>
	{#each items as item}
		<li><a href={item.href}>{item.text}</a></li>
	{/each}
</ul>

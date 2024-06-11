<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let type: 'submit' | 'button' = 'button';
	export let classes = '';
</script>

<button {type} on:click class={cn('', classes)}>
	<slot />
</button>

<style lang="postcss">
	@media (hover: hover) {
		button:hover {
			background-color: #cab18a;
		}
	}
</style>

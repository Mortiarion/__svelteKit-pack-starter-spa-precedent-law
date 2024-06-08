<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let classes: string = '';
</script>

<div class={cn('bg-header_line h-[1px] w-full', classes)}>
	<slot />
</div>

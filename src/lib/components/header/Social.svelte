<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import GmailIcon from '$lib/components/icons/GmailIcon.svelte';
	import TelegramIcon from '$lib/components/icons/TelegramIcon.svelte';
	import TelephoneIcon from '$lib/components/icons/TelephoneIcon.svelte';
	import ViberIcon from '$lib/components/icons/ViberIcon.svelte';
	import InstagramIcon from '$lib/components/icons/InstagramIcon.svelte';
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';
	import TiktokIcon from '../icons/TiktokIcon.svelte';
	
	
	
	
	export let classes = '';
	
	
</script>

<ul class={cn('', classes)}>
	<li>
		<a href="tel:+380930343344">
			<TelephoneIcon />
		</a>
	</li>
	<li>
		<a href="https://t.me/Justitia_od">
			<TelegramIcon />
		</a>
	</li>
	<li>
		<a href="viber://chat?number=%2B380930343344">
			<ViberIcon />
		</a>
	</li>
	<li>
		<a href="mailto:precedent.prava@gmail.com">
			<GmailIcon />
		</a>
	</li>
	<li>
		<a href="https://www.instagram.com/legal_precedent_/">
			<InstagramIcon />
		</a>
	</li>
	<li>
		<a href="https://www.facebook.com/centrjurisprudence">
			<FacebookIcon />
		</a>
	</li>
	<li>
		<a href="https://www.tiktok.com/@precedent.prava?_t=ZM-8zRVFDgzTsb&_r=1" title="Ми в тікток" aria-label="Ми в тікток">
			<TiktokIcon />
		</a>
	</li>
</ul>

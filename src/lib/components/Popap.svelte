<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import ViberPopupIcon from '$lib/components/icons/popup-icons/ViberPopupIcon.svelte';
	import TelegramPopupIcon from '$lib/components/icons/popup-icons/TelegramPopupIcon.svelte';
	import CloseIcon from '$lib/components/icons/popup-icons/CloseIcon.svelte';

	function updateBodyOverflow() {
		if (popupVisible === true) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}
	
	const dispatch = createEventDispatcher();
	let popupVisible = false;

	function closePopup() {
		popupVisible = false;
		updateBodyOverflow();
		dispatch('close');
	}

	function openPopup() {
		popupVisible = true;
		updateBodyOverflow();
	}

	onMount(() => {
		openPopup();
	});

	onDestroy(() => {
		document.body.classList.remove('overflow-hidden');
	});
</script>

{#if popupVisible}
	<div class="fixed inset-0 z-[1000] flex items-end bg-popap">
		<div class="relative flex w-full flex-col items-center gap-8 bg-white p-8 pb-32 pt-16 bs:pb-16">
			<Heading level="h4" classes="text-2xl max-w-[460px] text-center">
				Оберіть зручний для вас спосіб, щоб зв'язатися з нашими фахівцями
			</Heading>

			<div class="flex justify-center gap-5">
				<a href="viber://chat?number=%2B380930343344" title="Перейти до вайбер"> 
					<ViberPopupIcon />
				</a>

				<a href="https://t.me/+380930343344" title="Перейти до телеграм">
					<TelegramPopupIcon />
				</a>

				<button
					type="button"
					class="absolute right-8 top-5"
					on:click={closePopup}
					aria-label="Close"
				>
					<CloseIcon />
				</button>
			</div>
		</div>
	</div>
{/if}

<script lang="ts">
	import { onMount } from 'svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Image from '$lib/base-components/Image.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Button from '$lib/base-components/Button.svelte';
	import Fade_In_Out from '$lib/components/Fade_In_Out.svelte';
	import Line from '$lib/base-components/Line.svelte';

	let showAll = false;
	let headingRef: HTMLElement;

	function toggleShowAll() {
		showAll = !showAll;
		if (!showAll) {
			headingRef.scrollIntoView({ behavior: 'smooth' });
		}
	}

	const handleResize = () => {
		if (window.innerWidth >= 1440) {
			showAll = true;
		} else {
			showAll = false;
		}
	};
	window.addEventListener('resize', handleResize);

	onMount(() => {
		handleResize();
	});
</script>

<Fade_In_Out duration={1000} threshold={0.2}>
	<div>
		<Line classes="bg-grey mb-10" />
		<div class="2xl:mb-10 2xl:flex 2xl:flex-row-reverse 2xl:gap-40">
			<div bind:this={headingRef} class="lg:flex lg:justify-center">
				<Image
					classes="mb-5 2xl:px-2.5 2xl:max-w-[510px] 2xl:max-h-[600px]"
					src={'/img/our-team-six.jpg'}
					alt={'our-team-six'}
				/>
			</div>
			<div class="flex flex-col gap-8">
				<div class="flex flex-col items-center gap-1 2xl:items-start">
					<Heading level="h4" classes="font-source text-xl font-semibold 2xl:text-3xl"
						>Младен Бардук</Heading
					>
					<Text classes="text-location_color 2xl:text-xl">Голова адвокатського об'єднання</Text>
				</div>
				<Paragraph classes="text-center 2xl:text-left">
					<Text classes="font-semibold">Професійний досвід:</Text> <br class="hidden 2xl:block" />
					Младен Бардук веде адвокатську практику з 2009 року. До цього він працював у суді на різних
					посадах, що надало йому унікальний погляд на юридичні процеси зсередини. Його досвід у поєднанні
					з багаторічною практикою робить його надзвичайно цінним спеціалістом.
				</Paragraph>
				{#if showAll}
					<Paragraph classes="text-center 2xl:text-left">
						<Text classes="font-semibold">Спеціалізація:</Text> <br class="hidden 2xl:block" />
						Младен спеціалізується у різних галузях права, що дозволяє йому ефективно вирішувати найрізноманітніші
						юридичні питання. Його всебічні знання і вміння охоплюють широкий спектр правових проблем,
						що робить його універсальним юристом.
					</Paragraph>
					<Paragraph classes="text-center 2xl:text-left">
						<Text classes="font-semibold">Особисті якості:</Text> <br class="hidden 2xl:block" />
						Младен є душею команди та головою нашого адвокатського об'єднання. Його нестандартний підхід
						до вирішення різних питань виділяє його серед інших фахівців. Младен відзначається високим
						професіоналізмом, креативністю та здатністю знаходити унікальні рішення для складних ситуацій.
					</Paragraph>
					<Paragraph classes="text-center 2xl:text-left">
						<Text classes="font-semibold">Чому обрати Младена:</Text>
						<br class="hidden 2xl:block" />
						Младен Бардук не лише є дуже хорошим спеціалістом, але й лідером, який веде свою команду
						до успіху. Його компетентність, нестандартне мислення та багаторічний досвід у правовій сфері
						гарантують, що клієнти отримують найкращу правову допомогу. З таким адвокатом ви можете бути
						впевнені в успішному вирішенні ваших правових питань.
					</Paragraph>
				{/if}
				<Button classes="text-pepel ml-auto mb-10 text-sm 2xl:hidden" on:click={toggleShowAll}>
					{#if showAll}
						<Text>Сховати</Text>
					{:else}
						<Text classes="flex items-end"
							>Читати далі

							<svg
								width="31"
								height="8"
								viewBox="0 0 31 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M30.4201 4.35355C30.6154 4.15829 30.6154 3.84171 30.4201 3.64645L27.2382 0.464466C27.0429 0.269204 26.7263 0.269204 26.5311 0.464466C26.3358 0.659728 26.3358 0.976311 26.5311 1.17157L29.3595 4L26.5311 6.82843C26.3358 7.02369 26.3358 7.34027 26.5311 7.53553C26.7263 7.7308 27.0429 7.7308 27.2382 7.53553L30.4201 4.35355ZM0 4.5H30.0666V3.5L0 3.5L0 4.5Z"
									fill="#7E7E7E"
								/>
							</svg>
						</Text>
					{/if}
				</Button>
			</div>
		</div>
	</div>
</Fade_In_Out>

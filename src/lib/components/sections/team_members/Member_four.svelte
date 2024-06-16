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
					src={'/img/our-team-four.jpg'}
					alt={'our-team-four'}
				/>
			</div>
			<div class="flex flex-col gap-8">
				<div class="flex flex-col items-center gap-1 2xl:items-start">
					<Heading level="h4" classes="font-source text-xl font-semibold 2xl:text-3xl"
						>Олена Васильєва</Heading
					>
					<Text classes="text-location_color 2xl:text-xl">Помічник адвоката</Text>
				</div>
				<Paragraph classes="text-center 2xl:text-left">
					<Text classes="font-semibold">Освіта:</Text> <br class="hidden 2xl:block" />
					Олена Васильєва закінчила Національний університет «Одеська юридична академія» з відзнакою,
					отримавши кваліфікацію магістра права. Її академічні успіхи підтверджують її глибокі знання
					та відданість юридичній професії.
				</Paragraph>
				{#if showAll}
					<Paragraph classes="text-center 2xl:text-left">
						<Text classes="font-semibold">Професійні якості:</Text> <br class="hidden 2xl:block" />
						Олена - надзвичайно грамотний фахівець, не по роках зрілий. Її компетентність і здатність
						швидко та якісно виконувати завдання викликають захоплення. Олена завжди виконує доручення
						не просто швидко, а дуже швидко та дуже грамотно. Немає такого юридичного питання, яке їй
						не під силу.
					</Paragraph>
					<Paragraph classes="text-center 2xl:text-left">
						<Text classes="font-semibold">Особисті якості:</Text> <br class="hidden 2xl:block" />
						Олена відзначається сумлінністю, ввічливістю, порядністю та надійністю. Вона є незамінним
						членом команди, на якого можна покластися в будь-якій ситуації.
					</Paragraph>
					<Paragraph classes="text-center 2xl:text-left">
						<Text classes="font-semibold">Чому обрати Олену:</Text> <br class="hidden 2xl:block" />
						Незважаючи на молодий вік та те, що вона ще не адвокат, рівень знань Олени вражає. Вона демонструє
						високий професіоналізм та відповідальність у своїй роботі, що робить її важливим ресурсом
						для будь-якої юридичної фірми. Олена Васильєва - це гарантія якісної та ефективної правової
						допомоги.
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

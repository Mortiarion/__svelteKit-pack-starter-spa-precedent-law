<script lang="ts">
	import { onMount } from 'svelte';
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Line from '$lib/base-components/Line.svelte';
	import Image from '$lib/base-components/Image.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Button from '$lib/base-components/Button.svelte';

	let showAll = false;

	function toggleShowAll() {
		showAll = !showAll;
	}

	const handleResize = () => {
		// window.innerWidth === 1440 ? (showAll = true) : (showAll = false);
		if (window.innerWidth >= 1440) {
			showAll = true;
		} else {
			showAll = false;
		}
	};
	// Слухач подій для зміни розміру вікна
	window.addEventListener('resize', handleResize);

	// Перевірка розміру вікна при завантаженні сторінки
	onMount(() => {
		handleResize();
	});
</script>

<Section>
	<Container>
		<div class="pb-10 pt-20 text-black">
			<Heading level="h2" classes="text-3xl font-semibold text-center mb-10 2xl:text-6xl"
				>Наша команда</Heading
			>
			<Line classes="bg-grey mb-10" />
			<div class="2xl:mb-10 2xl:flex 2xl:gap-40">
				<div class="lg:flex lg:justify-center 2xl:max-w-[60%]">
					<Image classes="px-10" src={'/img/our-team-one.jpg'} alt={'our-team-one'} />
				</div>
				<div class="flex flex-col gap-8 2xl:max-w-[40%]">
					<div class="flex flex-col items-center 2xl:items-start">
						<Heading level="h4" classes="text-xl font-semibold 2xl:text-3xl">Діана Лісіна</Heading>
						<Text classes="text-location_color 2xl:text-xl">Адвокат</Text>
					</div>
					<Paragraph>
						<Text classes="font-semibold">Професійний досвід:</Text>
						Діана Лісіна веде адвокатську практику з початку 2022 року. Незважаючи на відносно короткий
						термін професійної діяльності, вона вже встигла зарекомендувати себе як висококваліфікований
						фахівець.
					</Paragraph>
					{#if showAll}
						<Paragraph>
							<Text classes="font-semibold">Спеціалізація:</Text>
							Діана спеціалізується на корпоративних спорах та договірному праві,а також на судових процесах
							з адміністративного права. Її експертні знання та досвід допомогли врятувати не одне підприємство
							від правових труднощів.
						</Paragraph>
						<Paragraph>
							<Text classes="font-semibold">Особисті якості:</Text>
							Нехай Вас не бентежить вік та привабливість Діани. Вона є відмінним спеціалістом, яка відзначається
							виконавчістю, чесністю та порядністю. Її професіоналізм, уважність до деталей та відданість
							своїй роботі забезпечують успішний результат кожної справи, якою вона займається.
						</Paragraph>
						<Paragraph>
							<Text classes="font-semibold">Чому обрати Діану::</Text>
							Діана Лісіна - це надійний партнер у вирішенні юридичних питань.Її компетентність, відповідальність
							та прагнення досягати найкращих результатів роблять її незамінною для клієнтів, які шукають
							надійну правову підтримку.
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

			<div>
				<Line classes="bg-grey mb-10" />
				<div class="2xl:mb-10 2xl:flex 2xl:flex-row-reverse 2xl:gap-40">
					<div class="lg:flex lg:justify-center 2xl:max-w-[60%]">
						<Image classes="px-10" src={'/img/our-team-two.jpg'} alt={'our-team-two'} />
					</div>
					<div class="flex flex-col gap-8 2xl:max-w-[40%]">
						<div class="flex flex-col items-center 2xl:items-start">
							<Heading level="h4" classes="text-xl font-semibold 2xl:text-3xl"
								>Віктор Бардук</Heading
							>
							<Text classes="text-location_color 2xl:text-xl">Адвокат</Text>
						</div>
						<Paragraph>
							<Text classes="font-semibold">Професійний досвід:</Text>
							Віктор Бардук веде адвокатську практику з 2012 року. До цього він тривалий час працював
							у правоохоронних органах України. Його кар'єра включає посади старшого оперативного уповноваженого
							в органах карного розшуку в складі Міністерства внутрішніх справ України, старшого слідчого
							та старшого оперативного уповноваженого податкової міліції.
						</Paragraph>
						{#if showAll}
							<Paragraph>
								<Text classes="font-semibold">Спеціалізація:</Text>
								Віктор спеціалізується на кримінальному процесі. Завдяки його глибоким знанням та досвіду,
								багато його клієнтів отримали виправдовувальні вироки.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Досвід:</Text>
								Загальний стаж юридичної роботи Віктора складає понад 25 років, що свідчить про його
								високу компетентність та надійність як адвоката.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Чому обрати Віктора:</Text>
								З таким адвокатом ви під надійним захистом. Віктор Бардук забезпечує професійний підхід
								та індивідуальну увагу до кожного клієнта, що гарантує успішний результат справи.
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

			<div>
				<Line classes="bg-grey mb-10" />
				<div class="2xl:mb-10 2xl:flex 2xl:gap-40">
					<div class="lg:flex lg:justify-center 2xl:max-w-[60%]">
						<Image classes="px-10" src={'/img/our-team-three.jpg'} alt={'our-team-three'} />
					</div>
					<div class="flex flex-col gap-8 2xl:max-w-[40%]">
						<div class="flex flex-col items-center 2xl:items-start">
							<Heading level="h4" classes="text-xl font-semibold 2xl:text-3xl"
								>Дмитро Попроцький</Heading
							>
							<Text classes="text-location_color 2xl:text-xl">Адвокат</Text>
						</div>
						<Paragraph>
							<Text classes="font-semibold">Професійний досвід:</Text>
							Дмитро Попроцький веде адвокатську практику з 2008 року. За цей час він здобув значний
							досвід у різних галузях права, зокрема у господарському, цивільному та сімейному праві.
						</Paragraph>
						{#if showAll}
							<Paragraph>
								<Text classes="font-semibold">Спеціалізація:</Text>
								Дмитро спеціалізується на господарському та цивільному судових процесах, допомагаючи
								клієнтам ефективно вирішувати правові питання, пов'язані з бізнесом та особистими справами.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Чому обрати Дмитра:</Text>
								Завдяки багаторічному досвіду та глибоким знанням, Дмитро Попроцький пропонує своїм клієнтам
								професійний підхід та надійну правову підтримку. Його компетентність і відповідальність
								гарантують успішне вирішення навіть найскладніших юридичних питань.
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

			<div>
				<Line classes="bg-grey mb-10" />
				<div class="2xl:mb-10 2xl:flex 2xl:flex-row-reverse 2xl:gap-40">
					<div class="lg:flex lg:justify-center 2xl:max-w-[60%]">
						<Image classes="px-10" src={'/img/our-team-four.jpg'} alt={'our-team-four'} />
					</div>
					<div class="flex flex-col gap-8 2xl:max-w-[40%]">
						<div class="flex flex-col items-center 2xl:items-start">
							<Heading level="h4" classes="text-xl font-semibold 2xl:text-3xl"
								>Олена Васильєва</Heading
							>
							<Text classes="text-location_color 2xl:text-xl">Помічник адвоката</Text>
						</div>
						<Paragraph>
							<Text classes="font-semibold">Освіта:</Text>
							Олена Васильєва закінчила Національний університет «Одеська юридична академія» з відзнакою,
							отримавши кваліфікацію магістра права. Її академічні успіхи підтверджують її глибокі знання
							та відданість юридичній професії.
						</Paragraph>
						{#if showAll}
							<Paragraph>
								<Text classes="font-semibold">Професійні якості:</Text>
								Олена - надзвичайно грамотний фахівець, не по роках зрілий. Її компетентність і здатність
								швидко та якісно виконувати завдання викликають захоплення. Олена завжди виконує доручення
								не просто швидко, а дуже швидко та дуже грамотно. Немає такого юридичного питання, яке
								їй не під силу.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Особисті якості:</Text>
								Олена відзначається сумлінністю, ввічливістю, порядністю та надійністю. Вона є незамінним
								членом команди, на якого можна покластися в будь-якій ситуації.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Чому обрати Олену:</Text>
								Незважаючи на молодий вік та те, що вона ще не адвокат, рівень знань Олени вражає. Вона
								демонструє високий професіоналізм та відповідальність у своїй роботі, що робить її важливим
								ресурсом для будь-якої юридичної фірми. Олена Васильєва - це гарантія якісної та ефективної
								правової допомоги.
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

			<div>
				<Line classes="bg-grey mb-10" />
				<div class="2xl:mb-10 2xl:flex 2xl:gap-40">
					<div class="lg:flex lg:justify-center 2xl:max-w-[60%]">
						<Image classes="px-10" src={'/img/our-team-five.jpg'} alt={'our-team-five'} />
					</div>
					<div class="flex flex-col gap-8 2xl:max-w-[40%]">
						<div class="flex flex-col items-center 2xl:items-start">
							<Heading level="h4" classes="text-xl font-semibold 2xl:text-3xl">Лілія Братим</Heading
							>
							<Text classes="text-location_color 2xl:text-xl">Старший консультант</Text>
						</div>
						<Paragraph>
							<Text classes="font-semibold">Професійний досвід:</Text>
							Лілія Братим розпочала свою юридичну кар’єру у 2004 році у відділі економіки слідчого відділу
							Міністерства внутрішніх справ України. За час своєї кар’єри вона обіймала різні посади,
							включаючи старшого слідчого та роботу в міграційній службі України.
						</Paragraph>
						{#if showAll}
							<Paragraph>
								<Text classes="font-semibold">Спеціалізація:</Text>
								Лілія спеціалізується на міжнародному праві, зовнішньоекономічній діяльності, міграційному
								праві, консульських і дипломатичних зносинах. Вона також має великий досвід у сфері бізнесу
								та електронної комерції, включаючи крипто право та ІТ право.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Досвід:</Text>
								З 20-річним стажем у юридичній практиці, Лілія втілює юридичну майстерність та міжнародний
								досвід. Вона не тільки розуміє закони, але й передбачає їх вплив на ваш бізнес та життя.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Чому обрати Лілію?</Text>
								Лілія володіє кількома мовами, включаючи англійську, німецьку, турецьку та грузинську,
								і є стратегічним партнером у сфері міжнародного права, економіки та бізнесу. Вона має
								глибокі знання та практичний досвід у Європейському Союзі, країнах Кавказу та Азії, зокрема
								у бізнесі та електронній комерції. Її робота в Грузії, Туреччині, Китаї та країнах ЄС
								надає їй унікальний інсайт, який вона використовує для захисту інтересів своїх клієнтів.
							</Paragraph>
							<Paragraph>
								У світі, де криптовалюта та ІТ право стають все більш актуальними, Лілія пропонує
								передові рішення у цих швидко розвиваючихся галузях. Вона забезпечує захист ваших
								інтересів на крипто-платформах та кібербезпеку, допомагає розуміти оподаткування та
								легально працювати в різних країнах світу. Лілія - експерт, який не тільки виведе
								вас зі складних юридичних лабіринтів, але й допоможе будувати міцний фундамент для
								вашого майбутнього успіху у бізнесі та інвестиціях.
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

			<div>
				<Line classes="bg-grey mb-10" />
				<div class="2xl:mb-10 2xl:flex 2xl:flex-row-reverse 2xl:gap-40">
					<div class="lg:flex lg:justify-center 2xl:max-w-[60%]">
						<Image classes="px-10" src={'/img/our-team-six.jpg'} alt={'our-team-six'} />
					</div>
					<div class="flex flex-col gap-8 2xl:max-w-[40%]">
						<div class="flex flex-col items-center 2xl:items-start">
							<Heading level="h4" classes="text-xl font-semibold 2xl:text-3xl"
								>Младен Бардук</Heading
							>
							<Text classes="text-location_color 2xl:text-xl">Голова адвокатського об'єднання</Text>
						</div>
						<Paragraph>
							<Text classes="font-semibold">Професійний досвід:</Text>
							Младен Бардук веде адвокатську практику з 2009 року. До цього він працював у суді на різних
							посадах, що надало йому унікальний погляд на юридичні процеси зсередини. Його досвід у
							поєднанні з багаторічною практикою робить його надзвичайно цінним спеціалістом.
						</Paragraph>
						{#if showAll}
							<Paragraph>
								<Text classes="font-semibold">Спеціалізація:</Text>
								Младен спеціалізується у різних галузях права, що дозволяє йому ефективно вирішувати
								найрізноманітніші юридичні питання. Його всебічні знання і вміння охоплюють широкий спектр
								правових проблем, що робить його універсальним юристом.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Особисті якості:</Text>
								Младен є душею команди та головою нашого адвокатського об'єднання. Його нестандартний
								підхід до вирішення різних питань виділяє його серед інших фахівців. Младен відзначається
								високим професіоналізмом, креативністю та здатністю знаходити унікальні рішення для складних
								ситуацій.
							</Paragraph>
							<Paragraph>
								<Text classes="font-semibold">Чому обрати Младена:</Text>
								Младен Бардук не лише є дуже хорошим спеціалістом, але й лідером, який веде свою команду
								до успіху. Його компетентність, нестандартне мислення та багаторічний досвід у правовій
								сфері гарантують, що клієнти отримують найкращу правову допомогу. З таким адвокатом ви
								можете бути впевнені в успішному вирішенні ваших правових питань.
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
			<Line classes="bg-grey mb-10" />
		</div>
	</Container>
</Section>

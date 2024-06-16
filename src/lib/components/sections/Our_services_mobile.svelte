<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Fade_In_Out from '$lib/components/Fade_In_Out.svelte';
	import Button from '$lib/base-components/Button.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Popap from '$lib/components/Popap.svelte';

	const categories: string[] = [
		'Все',
		'Сімейне право',
		'Військове право',
		'Адміністративне право',
		'Адміністративні провадження',
		'Цивільне право',
		'Господарське право',
		'Міграційне право та юридична допомога за кордоном',
		'Кримінальне право'
	];

	const subCategories: Record<string, string[]> = {
		Все: [
			'Розірвання шлюбу',
			'Стягнення аліментів',
			'Позбавлення батьківських прав',
			'Шлюбний договір та контракт',
			'Встановлення місця проживання дитини з одним з батьків',
			'Поділ спільного майна подружжя',
			'Оформлення відстрочки від мобілізації',
			'Звільнення з військової служби або переміщення',
			'Оскарження постанов військово-лікарської комісії',
			'Отримання компенсаційних виплат чинним військовим',
			'Оскарження дій або бездіяльності субʼєкта владних повноважень',
			'Консультації з подання та змін до декларацій (НАЗК)',
			'Оскарження постанов при вчинення корупційних правопорушень',
			'Захист у справах про адміністративне правопорушення',
			'Оскарження адміністративних протоколів та постанов (ДТП, керування транспортним засобом у стані алкогольного спʼяніння, тощо)',
			'Цивільні спори',
			'Стягнення заборгованості',
			'Захист прав споживачів',
			'Купівля-продаж нерухомості',
			'Допомога при ДТП',
			'Земельні та житлові спори',
			'Спори з фінансовими та банківськими установами',
			'Спадкування',
			'Вступ у спадщину',
			'Захист інтелектуальної власності',
			'Зняття арешту з майна',
			'Виконавче провадження',
			'Захист інвестицій',
			'Корпоративні спори',
			'Захист інвестицій',
			'Захист бізнесу від рейдерства',
			'Стягнення за договором поставки',
			'Ліквідація юридичної особи',
			'Захист честі, гідності та ділової репутації',
			'Банкрутство',
			'Захист інтелектуальної власності',
			'Захист криптовалютних інвестицій',
			'Перетин кордону',
			'Міграційні послуги',
			'Послуги з відкриття юридичної особи за кордоном',
			'Укладання шлюбу за кордоном',
			'Представництво інтересів у консульських установах',
			'Захист у кримінальному провадженні',
			'Захист під час досудового розслідування',
			'Захист інтересів під час тимчасового затримання особи, арешту майна та застосування інших заходів забезпечення',
			'Представництво під час проведення слідчих дій',
			'Надання консультацій на будь-якому етапі провадження'
		],
		'Сімейне право': [
			'Розірвання шлюбу',
			'Стягнення аліментів',
			'Позбавлення батьківських прав',
			'Шлюбний договір та контракт',
			'Встановлення місця проживання дитини з одним з батьків',
			'Поділ спільного майна подружжя'
		],
		'Військове право': [
			'Оформлення відстрочки від мобілізації',
			'Звільнення з військової служби або переміщення',
			'Оскарження постанов військово-лікарської комісії',
			'Отримання компенсаційних виплат чинним військовим'
		],
		'Адміністративне право': [
			'Оскарження дій або бездіяльності субʼєкта владних повноважень',
			'Консультації з подання та змін до декларацій (НАЗК)',
			'Оскарження постанов при вчинення корупційних правопорушень'
		],
		'Адміністративні провадження': [
			'Оскарження адміністративних протоколів та постанов (ДТП, керування транспортним засобом у стані алкогольного спʼяніння, тощо)',
			'Захист у справах про адміністративне правопорушення'
		],
		'Цивільне право': [
			'Цивільні спори',
			'Стягнення заборгованості',
			'Захист прав споживачів',
			'Купівля-продаж нерухомості',
			'Допомога при ДТП',
			'Земельні та житлові спори',
			'Спори з фінансовими та банківськими установами',
			'Спадкування',
			'Вступ у спадщину',
			'Захист інтелектуальної власності',
			'Зняття арешту з майна',
			'Виконавче провадження',
			'Захист інвестицій'
		],
		'Господарське право': [
			'Корпоративні спори',
			'Захист інвестицій',
			'Захист бізнесу від рейдерства',
			'Стягнення за договором поставки',
			'Ліквідація юридичної особи',
			'Захист честі, гідності та ділової репутації',
			'Банкрутство',
			'Захист інтелектуальної власності',
			'Захист криптовалютних інвестицій'
		],
		'Міграційне право та юридична допомога за кордоном': [
			'Перетин кордону',
			'Міграційні послуги',
			'Послуги з відкриття юридичної особи за кордоном',
			'Укладання шлюбу за кордоном',
			'Представництво інтересів у консульських установах'
		],
		'Кримінальне право': [
			'Захист у кримінальному провадженні',
			'Захист під час досудового розслідування',
			'Захист інтересів під час тимчасового затримання особи, арешту майна та застосування інших заходів забезпечення',
			'Представництво під час проведення слідчих дій',
			'Надання консультацій на будь-якому етапі провадження'
		]
	};

	let activeCategory: string = categories[0];
	let subCategory: string = '';

	function setActiveCategory(category: string) {
		activeCategory = category;
		subCategory = '';
		showFilter = false;
	}

	function setSubCategory(subCat: string) {
		subCategory = subCat;
		showFilter = false;
	}

	let showFilter: boolean = false;

	function toggleFilter() {
		showFilter = !showFilter;

		if (!showFilter) {
			subCategory = '';
		}
	}
	let popupVisible = false;

	function openPopup() {
		popupVisible = true;
	}

	function closePopup() {
		popupVisible = false;
	}
</script>

<Section id="our_services_mobile" classes="xl:hidden">
	<Container classes="font-source font-semibold">
		<Heading level="h4" classes="text-3xl text-center mb-10">Наші послуги</Heading>

		<Button
			on:click={toggleFilter}
			classes="flex text-left flex-row-reverse gap-2.5 justify-center items-center text-sm font-source font-semibold mb-10"
		>
			{activeCategory}
			<svg
				width="20"
				height="19"
				viewBox="0 0 20 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 15.5H19M1 15.5H3M3 15.5C3 16.8807 4.11929 18 5.5 18C6.88071 18 8 16.8807 8 15.5C8 14.1193 6.88071 13 5.5 13C4.11929 13 3 14.1193 3 15.5ZM18 9.5H19M1 9.5H8M11 3.5H19M11 3.5C11 2.11929 9.88071 1 8.5 1C7.11929 1 6 2.11929 6 3.5C6 4.88071 7.11929 6 8.5 6C9.88071 6 11 4.88071 11 3.5ZM1 3.5H2M14.5 12C13.1193 12 12 10.8807 12 9.5C12 8.11929 13.1193 7 14.5 7C15.8807 7 17 8.11929 17 9.5C17 10.8807 15.8807 12 14.5 12Z"
					stroke="#CAB18A"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</Button>

		{#if showFilter}
			<Fade_In_Out duration={1000} threshold={0.2}>
				<div class="filter-buttons">
					{#each categories as category}
						<button
							class={`filter-button ${category === activeCategory ? 'active' : ''}`}
							on:click={() => setActiveCategory(category)}
						>
							{category}
						</button>
					{/each}
				</div>
			</Fade_In_Out>
		{/if}

		<ul class="filter-list mb-20 flex flex-col gap-5">
			{#each subCategory ? [subCategory] : subCategories[activeCategory] || [] as item}
				<li class="text-center font-roboto font-normal">
					{item}
					<button
						id="consultation-button"
						on:click={openPopup}
						class="rounded bg-location_color px-5 py-2.5 font-source text-sm text-white"
					>
						Отримати консультацію
					</button>
				</li>
			{/each}
		</ul>
		{#if popupVisible}
			<Popap on:close={closePopup} />
		{/if}
	</Container>
</Section>

<style lang="postcss">
	.filter-buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 40px;
		margin-top: -30px;
	}

	.subcategories {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.filter-button {
		cursor: pointer;
		transition: background-color 0.3s ease;
		text-align: left;
	}
	.filter-button:hover {
		background-color: #cab18a;
	}

	.filter-button.active {
		background-color: #e4e4e4;
		color: #292424;
		pointer-events: none;
	}
	.filter-list {
	}
	.filter-list li {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 14px;
		padding: 10px;
		gap: 20px;

		box-shadow:
			28px 15px 13px rgba(138, 133, 133, 0.01),
			16px 8px 11px rgba(138, 133, 133, 0.05),
			7px 4px 8px rgba(138, 133, 133, 0.09),
			2px 1px 4px rgba(138, 133, 133, 0.1);
		border-radius: 10px;
	}

	.filter-list-item {
		box-shadow:
			28px 15px 13px rgba(138, 133, 133, 0.01),
			16px 8px 11px rgba(138, 133, 133, 0.05),
			7px 4px 8px rgba(138, 133, 133, 0.09),
			2px 1px 4px rgba(138, 133, 133, 0.1);
		border-radius: 20px;
	}
</style>

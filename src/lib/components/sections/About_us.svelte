<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Image from '$lib/base-components/Image.svelte';
	import Fade_In_Out from '$lib/components/Fade_In_Out.svelte';
	import FadeInOut from '$lib/components/Fade_In_Out.svelte';
</script>

<Section id="about_us">
	<Container classes="bg-gradient_about_as pt-16 xl:pt-20 pb-10 2xl:px-20 2xl:pb-10">
		<div class="xl:flex xl:flex-col xl:gap-10 2xl:flex-row 2xl:gap-28">
			<div class="2xl:w-[60%]">
				<Heading level="h1" classes="text-6xl text-center mb-10 font-semibold font-source"
					>Про нас</Heading
				>
				<div class="flex flex-col gap-10 text-base">
					<Fade_In_Out duration={1000} threshold={0.2}>
						<Paragraph>
							Наше адвокатське об'єднання <Text classes="font-semibold">"Прецедент права"</Text> існує
							вже понад 8 років, і за цей час ми зарекомендували себе як надійних і компетентних правозахисників.
							Ми пишаємося численними успішними справами та високим рівнем довіри наших клієнтів.
						</Paragraph>
					</Fade_In_Out>
					<FadeInOut>
						<Paragraph>
							<Text classes="font-semibold">Професіоналізм:</Text>
							Наша команда складається з висококваліфікованих адвокатів та юристів, кожен з яких має
							значний досвід у своїй спеціалізації. Ми забезпечуємо індивідуальний підхід до кожної справи,
							уважно вивчаючи всі деталі і розробляючи стратегії, що максимально захищають інтереси наших
							клієнтів.
						</Paragraph>
					</FadeInOut>
					<Fade_In_Out duration={1000} threshold={0.2}>
						<Paragraph>
							<Text classes="font-semibold">Досвід:</Text>
							За понад 8 років роботи адвокатське об'єднання <Text classes="font-semibold"
								>"Прецедент права"</Text
							> успішно вирішило безліч юридичних питань різної складності. Наші адвокати мають багатий
							досвід у кримінальному, господарському, цивільному, корпоративному та адміністративному
							праві. Останнім часом наша команда активно спеціалізується на військовому праві, що дозволяє
							нам ефективно вирішувати правові питання, пов'язані з військовою сферою. Кожна справа,
							яку ми ведемо, отримує належну увагу та професійний підхід.
						</Paragraph>
					</Fade_In_Out>
					<Fade_In_Out duration={1000} threshold={0.2}>
						<Paragraph>
							<Text classes="font-semibold">Репутація:</Text>
							Адвокатське об'єднання <Text classes="font-semibold">"Прецедент права"</Text> славиться
							високим рівнем успіху в судових процесах. Ми домоглися значної кількості виправдовувальних
							вироків та виграшів у складних судових спорах. Наша репутація базується на чесності, порядності
							та відданості справі.
						</Paragraph>
					</Fade_In_Out>
					<Fade_In_Out duration={1000} threshold={0.2}>
						<Paragraph>
							<Text classes="font-semibold">Чому обрати нас:</Text>
							Ми розуміємо, що кожна справа унікальна і вимагає особливого підходу. Наша команда не тільки
							забезпечує високий рівень правової допомоги, але й створює дружню та підтримуючу атмосферу
							для наших клієнтів. Ви можете бути впевнені, що з адвокатським об'єднанням <Text
								classes="font-semibold">"Прецедент права"</Text
							>
							ваші правові питання будуть вирішені на найвищому рівні.
						</Paragraph>
					</Fade_In_Out>
					<Fade_In_Out duration={1000} threshold={0.2}>
						<Paragraph
							>Адвокатське об'єднання <Text classes="font-semibold">"Прецедент права"</Text> – це ваша
							надійна правова підтримка у будь-якій ситуації.
						</Paragraph>
					</Fade_In_Out>
				</div>
			</div>
			<Fade_In_Out duration={1000} threshold={0.2}>
				<div class="hidden xl:mb-32 xl:flex xl:justify-center 2xl:m-0">
					<Image
						classes="max-w-[544px] max-h-[762px]"
						src={'/img/about-as.jpg'}
						alt={'about-as-img'}
					/>
				</div>
			</Fade_In_Out>
		</div>
	</Container>
</Section>

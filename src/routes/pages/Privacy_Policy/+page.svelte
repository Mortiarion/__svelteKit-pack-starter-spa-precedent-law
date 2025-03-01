<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
</script>

<Section classes="font-roboto">
	<Container classes="pt-20 pb-20 2xl:px-64 2xl:pb-32">
		<div class="mb-5 flex flex-col gap-5">
			<Heading level="h1" classes="text-3xl font-medium text-center"
				>Політика конфіденційності</Heading
			>
			<Paragraph classes='text-center mb-20'>
				Дякуємо, що відвідали наш веб-сайт. Ваша конфіденційність важлива для нас. Ця політика
				конфіденційності пояснює, яку інформацію ми збираємо, як ми її використовуємо, зберігаємо і
				захищаємо.
			</Paragraph>
		</div>
		<div class="mb-5 flex flex-col gap-5 2xl:mb-10">
			<Heading level="h4" classes="text-xl font-medium text-center 2xl:text-left">Збір інформації</Heading>
			<Paragraph>
				Ми можемо збирати особисту інформацію, коли ви відвідуєте наш сайт, підписуєтесь на нашу
				розсилку, заповнюєте форму або взаємодієте з нами іншим чином. Особиста інформація може
				включати:
			</Paragraph>
			<ul>
				<li>- Ім'я</li>
				<li>- Адреса електронної пошти</li>
				<li>- Телефонний номер</li>
				<li>- Поштова адреса</li>
				<li>- Інші дані, необхідні для надання наших послуг</li>
			</ul>
		</div>
		<div class="mb-5 flex flex-col gap-5 2xl:mb-10">
			<Heading level="h4" classes="text-xl font-medium text-center 2xl:text-left">Використання інформації</Heading
			>
			<Paragraph>Зібрана інформація може бути використана для:</Paragraph>
			<ul>
				<li>- Надання та покращення наших послуг</li>
				<li>- Персоналізації вашого досвіду</li>
				<li>- Відправлення періодичних електронних листів (за вашою згодою)</li>
				<li>- Відповіді на ваші запити та надання підтримки клієнтам</li>
			</ul>
		</div>
		<div class="mb-5 flex flex-col gap-5 2xl:mb-10">
			<Heading level="h4" classes="text-xl font-medium text-center 2xl:text-left">Захист інформації</Heading>
			<Paragraph
				>Ми впроваджуєемо різноманітні заходи безпеки для захисту вашої особистої інформації. Серед
				цих заходів:
			</Paragraph>
			<ul>
				<li>- Використання безпечних серверів</li>
				<li>- Шифрування конфіденційних даних</li>
				<li>- Обмеження доступу до інформації тільки для уповноважених осіб</li>
				<li>- Регулярне оновлення наших систем безпеки</li>
			</ul>
		</div>
		<div class="mb-5 flex flex-col gap-5 2xl:mb-10">
			<Heading level="h4" classes="text-xl font-medium text-center 2xl:text-left"
				>Розкриття інформації третім сторонам</Heading
			>
			<Paragraph>
				Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім сторонам без
				вашої згоди, за винятком наступних випадків:
			</Paragraph>
			<ul>
				<li>- Виконання вимог законодавства</li>
				<li>- Захист наших прав та власності</li>
				<li>
					- Надання послуг нашими партнерами, які зобов'язуються зберігати конфіденційність
					інформації
				</li>
			</ul>
		</div>
		<div class="mb-5 flex flex-col gap-5 2xl:mb-10">
			<Heading level="h4" classes="text-xl font-medium text-center 2xl:text-left"
				>Зміни до Політики конфіденційності</Heading
			>
			<Paragraph>
				Ми залишаємо за собою право оновлювати цю політику конфіденційності в будь-який час. Всі
				зміни будуть опубліковані на цій сторінці. Рекомендуємо періодично переглядати цю сторінку,
				щоб бути в курсі будь-яких змін.
			</Paragraph>
		</div>
		<div class="flex flex-col gap-5">
			<Heading level="h4" classes="text-xl font-medium text-center 2xl:text-left">Контактна інформація</Heading>
			<Paragraph>
				Якщо у вас виникли питання або пропозиції щодо нашої політики конфіденційності, будь ласка,
				зв'яжіться з нами за наступними контактними даними:
			</Paragraph>
			<a class="underline" href="tel:+380930343344">+380 (93) 034 33 44</a>
			<a class="underline" href="mailto:precedent.prava@gmail.com">precedent.prava@gmail.com</a>
		</div>
	</Container>
</Section>

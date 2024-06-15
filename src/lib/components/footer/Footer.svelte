<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Location from '$lib/components/header/Location.svelte';
	import Link from '$lib/base-components/Link.svelte';
	import Footer_Logo from '$lib/components/footer/Footer_Logo.svelte';
</script>

<Section tag="footer" classes="text-white bg-footer_bg_img bg-no-repeat bg-center bg-cover">
	<Container classes="py-5 xl:px-20">
		<div class="lg:flex lg:flex-col">
			<Location classes="hidden " />
			<Logo classes="justify-center flex mb-12 lg:hidden" />
			<Footer_Logo classes="bs:hidden lg:flex lg:justify-center lg:mb-12" />
		</div>
		<div class='flex flex-col md:flex-row md:justify-between'>
			<Link classes="text-white text-sm" href={'/pages/Privacy_Policy'}>Політика конфіденційності</Link>
			<a class='text-grey text-sm underline' href="https://t.me/anna_ryk">Design by Anna Ryk</a>
		</div>
	</Container>
</Section>

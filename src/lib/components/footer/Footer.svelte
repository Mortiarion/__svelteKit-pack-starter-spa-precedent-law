<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Logo from '$lib/base-components/Logo.svelte';
	import Location from '$lib/components/header/Location.svelte';
	import Paragraph from '$lib/base-components/Paragraph.svelte';
	import Text from '$lib/base-components/Text.svelte';
	import Link from '$lib/base-components/Link.svelte';
    import Footer_Logo from '$lib/components/footer/Footer_Logo.svelte';
</script>

<Section tag="footer" classes="text-white">
	<Container classes="bg-footer_bg_img pt-5 bg-no-repeat lg:bg-center lg:bg-cover  ">
        <div class='lg:flex lg:flex-col'>

            <Location classes="hidden " />
            <Logo classes="justify-center flex mb-12 lg:hidden" />
            <Footer_Logo classes='bs:hidden lg:flex lg:justify-center lg:mb-12' />
            <div class="flex flex-col gap-5 hidden">
                <Text>Піписатись на новини</Text>
                <form action="" class="mb-10 flex">
                    <input class="px-2.5 py-2" type="text" placeholder="Введіть email адресу" />
                    <button type="submit" class="bg-location_color px-2.5 py-2">Підписатись</button>
                </form>
            </div>
        </div>
		<Link href={'/'}>Політика конфіденційності</Link>
	</Container>
</Section>

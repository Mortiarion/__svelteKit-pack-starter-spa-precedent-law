<script lang="ts">
	import Section from '$lib/base-components/Section.svelte';
	import Container from '$lib/base-components/Container.svelte';
	import Heading from '$lib/base-components/Heading.svelte';
	import Line from '$lib/base-components/Line.svelte';
	import Member_one from '$lib/components/sections/team_members/Member_one.svelte';
	import Member_two from '$lib/components/sections/team_members/Member_two.svelte';
	import Member_three from '$lib/components/sections/team_members/Member_three.svelte';
	import Member_four from '$lib/components/sections/team_members/Member_four.svelte';
	import Member_five from '$lib/components/sections/team_members/Member_five.svelte';
	import Member_six from '$lib/components/sections/team_members/Member_six.svelte';
</script>

<Section id="our_team">
	<Container classes="2xl:px-16">
		<div class="pt-20 text-black">
			<Heading
				level="h2"
				classes="font-source text-3xl font-semibold text-center mb-10 2xl:text-6xl"
				>Наша команда</Heading
			>
			<Line classes="bg-grey mb-10" />

			<Member_one />

			<Member_two />

			<Member_three />

			<Member_four />

			<Member_five />

			<Member_six />

			<Line classes="bg-grey mb-10" />
		</div>
	</Container>
</Section>

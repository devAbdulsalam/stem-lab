<script>
	import Accordion from './accordion.svelte';
</script>

<section class="polygon2 md:py-10 py-5 md:px-20 px-5 my-7">
	<div class="flex justify-center my-3">
		<button
			type="button"
			data-mdb-ripple="true"
			data-mdb-ripple-color="#bf5926"
			data-mdb-ripple-duration="1000ms"
			class="bg-bg font-bold md:text-base text-sm py-2 px-10 text-center text-primary2 cursor-default uppercase opacity-90"
			>Our Programmes</button
		>
	</div>
	<p class="text-center text-white font-varela md:px-44 text-lg">
		We provide the opportunity to mentor, build, launch and scale high Quality Tech Talents.
	</p>

	<div>
		<Accordion />
	</div>
</section>

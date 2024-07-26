<script>
	import Faq from './../lib/faq.svelte';
	import SuccessStory from './../lib/successStory.svelte';
	import Programs from './../lib/programs.svelte';
	import AboutUs from './../lib/aboutUs.svelte';
	import Services from './../lib/services.svelte';
	import HomeHero from './../lib/home-hero.svelte';
	import Pattern from '../lib/pattern.svelte';
</script>

<div class="md:mx-20 mx-5">
	<HomeHero />
</div>
<Pattern data="" />
<div class="md:mx-20 mx-5">
	<Services />
</div>
<Pattern data="fade-right" />
<AboutUs />
<Pattern data="zoom-in" />
<Programs />
<Pattern data="zoom-in" />
<SuccessStory />
<Faq />

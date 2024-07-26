<script>
	import { onMount } from 'svelte';

	let isShow = false;

	async function toggle() {
		isShow = !isShow;
	}
</script>

<nav class="top-0 sticky bg-white z-40 font-raleway">
	<div class="flex items-center justify-between md:py-5 lg:px-24 md:px-14 py-3 px-5 md:mb-0 ">
		<a href="/">
			<img src="/logo.png" alt="" class="md:w-32 w-24 md:block hidden" />
			<img src="/sublogo.png" alt="" class="w-10 md:hidden" /></a
		>
		<div class="space-x-5 font-light text- hidden md:block">
			<a class="nav-link" href="./#about">About us</a>
			<a class="nav-link" href="/gallery">Gallery</a>
			<!-- <a class="nav-link" href="/home/message">MessageMe Service</a> -->
			<!-- <a class="nav-link" href="/home/team">Our Team</a> -->
			<a class="nav-link" href="/contact">Contact</a>
			<!-- <a href="https://wa.link/xalr68" class="nav-button-lg">Contact Us</a> -->
		</div>

		<div>
			<a href="https://wa.link/xalr68" class="nav-button-lg md:block hidden">Register</a>
		</div>
		<div class="md:hidden visible">
			<button class="mobile-menu-button" on:click={toggle}>
				<svg
					class="w-8 h-8 rounded p-1 ml-2 mt-1 bg-primary2 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</div>

	{#if isShow}
		<div
			class="space-y-2 text-sm px-4 py-4 mobile-menu md:hidden border-t border-t-primary -z-10 shadow-lg"
			data-aos="fade-down"
		>
			<a class="nav-menu" href="./#about" data-aos="fade-left">About</a>
			<a class="nav-menu" href="/gallery" data-aos="fade-right">Gallery</a>
			<a class="nav-menu" href="/contact" data-aos="fade-left">Contact</a>
			<a href="https://wa.link/svo99g" class="uppercase"
				><button
					class="bg-primary2 text-white py-2 px-1 rounded text-left w-full border border-primary2 hover:bg-pirmary2"
					data-aos="fade-right">Contact Us</button
				></a
			>
			<a href="https://wa.link/svo99g" class="uppercase"
				><button
					class="bg-primary2 text-white py-2 px-1 rounded text-left w-full border mt-2 border-primary2 hover:bg-pirmary2"
					data-aos="fade-up">Register</button
				></a
			>
		</div>
	{/if}
</nav>

<script>
	import Footer from './../lib/footer.svelte';
	import Navbar from './../lib/navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>StemLab Kano</title>
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
<Footer />

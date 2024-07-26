<script>
	let date = new Date();
	let year = date.getFullYear();
</script>

<footer class="border-t border-t-primary font-raleway">
	<div
		class="container md:pb-8 pb-20 px-5 py-8 mx-auto md:grid grid-cols-4 md:space-y-0 space-y-5 items-start"
		data-aos="fade-right"
	>
		<div class="flex items-center">
			<a
				href="/"
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<img src="/sublogo.png" class="w-20" alt="" />
			</a>
			<p
				class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary sm:py-2 sm:mt-0 mt-4"
			>
				© {year} <span class=""> StemLab Kano</span>
			</p>
		</div>

		<div class="text-left space-y-3" data-aos="fade-up">
			<h3 class="text-primary font-semibold">Links</h3>
			<ul class="space-y-2 font-light">
				<a href="./#home"><li>Home</li></a>
				<a href="./#about"><li>About</li></a>
				<a href="./#services"><li>Services</li></a>
				<a href="/contact"><li>Contact</li></a>
				<!-- <a href="./#book"><li>Book Now</li></a> -->
			</ul>
		</div>

		<div class="text-left text-gray-500 sm:mt-0 mt-4 justify-center md:justify-start space-y-2">
			<h3 class="text-primary font-semibold">Contact</h3>
			<div class="flex items-center text-sm">
				<i class="fas fa-map-marker-alt fa-xl mr-2" />
				<p class="text-sm text-left">60, Ahmadu Bello Way, Nassarawa GRA, Kano State, Nigeria</p>
			</div>
			<div class="flex items-center text-sm">
				<i class="fab fa-instagram fa-xl mr-2" />
				<a class="block text-sm" href="https://www.instagram.com/stemlab_ng/">Stemlab_ng</a>
			</div>
			<div class="flex items-center text-sm">
				<i class="fas fa-phone fa-xl mr-2" />
				<a class="block text-sm" href="tel:+2348162224407">08162224407</a>
			</div>
			<div class="flex items-center text-sm">
				<i class="fab fa-whatsapp fa-xl mr-2" />
				<a class="block text-sm" href="https://wa.link/xalr68">07014085472</a>
			</div>
			<div class="flex items-center text-sm">
				<i class="fas fa-envelope fa-xl mr-2" />
				<a class="block text-sm" href="mailto:admin@stemlab.com.ng">STEMLab</a>
			</div>
		</div>

		<div class="w-full">
			<div class="gmap_canvas">
				<iframe
					id="gmap_canvas"
					title="stemlab"
					src="https://maps.google.com/maps?q=Kano%20state%20library&t=k&z=17&ie=UTF8&iwloc=&output=embed"
				/>
				<!--<a href="https://123movies-to.org" />-->
			</div>
		</div>
	</div>
</footer>

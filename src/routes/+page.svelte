<script lang="ts">
	import '../app.css';
	import '$lib/styles/app.scss';
</script>

<svelte:head>
	<title>Dance Xperience</title>
	<meta name="description" content="Dance Xperience is een radioprogramma op Omroep Ede" />
	<meta name="keywords" content="Dance Xperience, Omroep Ede, Ede FM, Dance, Radio" />
</svelte:head>

<main class="text-left container p-8">
	<h1>Dance Xperience</h1>
	<section>
		<p>Deze website is momenteel onder constructie.</p>
		<p class="mb-2">
			We proberen de website zo snel mogelijk weer live te krijgen, excuses voor het ongemak.
		</p>
		<p>
			Dance Xperience is een radio show gepresenteerd door host DJ Kessie en sidekick DJ Joshua.
		</p>
		<p>Ons programma is te beluisteren op radio station Ede FM.</p>
	</section>

	<section>
		<h2>Kanalen</h2>
		<ul class="">
			<li>
				<div class="flex max-w-[24rem] justify-between gap-8">
					<span class="flex-[1]">FM</span>
					<span class="flex-[2.5]">107.3 MHz</span>
				</div>
			</li>
			<li>
				<div class="flex max-w-[24rem] justify-between gap-8">
					<span class="flex-[1]">DAB+</span>
					<span class="flex-[2.5]">Kanaal 5A (174,928 MHz)</span>
				</div>
			</li>
			<li>
				<div class="flex max-w-[24rem] justify-between gap-8">
					<span class="flex-[1]">Online stream</span>
					<span class="flex-[2.5]"
						><a href="https://omroepede.nl/radio">https://omroepede.nl/radio</a></span
					>
				</div>
			</li>
		</ul>
	</section>

	<section>
		<h2>Programmering:</h2>
		<ul>
			<li>
				<div class="flex max-w-[24rem] justify-between gap-8">
					<span class="flex-[1]">19:00 - 21:00</span>
					<span class="flex-[2.5]">Live presentatie</span>
				</div>
			</li>
			<li>
				<div class="flex max-w-[24rem] justify-between gap-8">
					<span class="flex-[1]">21:00 - 00:00</span>
					<span class="flex-[2.5]">Ingeprogrammeerde thema mixen</span>
				</div>
			</li>
		</ul>
	</section>

	<section>
		<h2>Contact</h2>
		<ul>
			<li>
				<a href="mailto:info@dancex.nl">info@dancex.nl</a> - Voor het stellen van vragen of verzoekjes
			</li>
			<li>
				<a href="mailto:aanmelden@dancex.nl">aanmelden@dancex.nl</a> - Als je je wilt aanmelden als gast
				bij ons in het programma
			</li>
			<li>
				<a href="mailto:mix@dancex.nl">mix@dancex.nl</a> - Voor het aanleveren van mixen (download link
				naar mix in de mail, liefst in .wav formaat)
			</li>
		</ul>
		<p>
			Volg voor updates <a href="https://www.facebook.com/djkessie/">Ap Kessie op Facebook!</a>
		</p>
	</section>
</main>

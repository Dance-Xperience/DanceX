<script lang="ts">
	import id from '../../identity';
	import { onMount } from 'svelte';

	onMount(() => {
		const r = document.querySelector(':root') as HTMLElement;

		const footer__kabelradio__list = document.querySelector(
			'#footer__kabelradio__list'
		) as HTMLUListElement;

		let footer__kabelradio__list__count = footer__kabelradio__list.childElementCount;

		function set_footer__kabelradio__offset(offset: string) {
			r.style.setProperty('--footer-kabelradio-offset', offset);
		}

		function footer__kabelradio__scrollRight() {
			const oldOffset = getComputedStyle(r).getPropertyValue('--footer-kabelradio-offset');

			let newOffset = parseInt(oldOffset) - 100;

			if (newOffset < (footer__kabelradio__list__count - 1) * -100) {
				newOffset = 0;
			}

			set_footer__kabelradio__offset(`${newOffset}%`);
		}

		function footer__kabelradio__scrollLeft() {
			const oldOffset = getComputedStyle(r).getPropertyValue('--footer-kabelradio-offset');

			let newOffset = parseInt(oldOffset) + 100;

			if (newOffset > 0) {
				newOffset = (footer__kabelradio__list__count - 1) * -100;
			}

			set_footer__kabelradio__offset(`${newOffset}%`);
		}

		(
			document.querySelector('#footer__kabelradio__scrollRight') as HTMLButtonElement
		).addEventListener('click', footer__kabelradio__scrollRight);

		(
			document.querySelector('#footer__kabelradio__scrollLeft') as HTMLButtonElement
		).addEventListener('click', footer__kabelradio__scrollLeft);
	});
</script>

<footer
	id="footer"
	class="static lg:sticky lg:bottom-0 flex justify-center items-center w-full bg-gray-800 lg:bg-white text-white lg:text-black shadow-2xl fade-content shadow-white"
>
	<!-- TODO light vs dark theme -->
	<div
		id="footer__content"
		class="
                        flex flex-col flex-grow justify-between items-center 
                        max-w-7xl
                "
	>
		<!-- border -->
		<div class="w-0 transition-all lg:w-[92%] max-w-7xl border-t-2 border-black" />

		<div
			id="footer__information"
			class="
				flex flex-col lg:flex-row flex-grow justify-between items-center lg:items-start self-stretch 
					
				m-8 lg:m-4

				max-w-7xl

				relative gap-8"
		>
			<div id="footer__kabelradio" class="text-center flex flex-col items-center">
				<b>Digitale Kabelradio</b>

				<div class="flex">
					<button
						id="footer__kabelradio__scrollLeft"
						class="hidden lg:block whitespace-nowrap cursor-pointer px-2 clickable-large">❮</button
					>
					<ul
						id="footer__kabelradio__list"
						class="
							relative
							flex flex-col justify-between
					
							lg:flex-row lg:flex-grow lg:flex-nowrap lg:whitespace-nowrap
							max-w-[10rem]
							overflow-hidden
						"
					>
						<li class="lg:min-w-full translate-x-[var(--footer-kabelradio-offset)] transition-all">
							KPN: 1015
						</li>
						<li class="lg:min-w-full translate-x-[var(--footer-kabelradio-offset)] transition-all">
							XS4ALL: 1015
						</li>
						<li class="lg:min-w-full translate-x-[var(--footer-kabelradio-offset)] transition-all">
							Solcon: 1215
						</li>
						<li class="lg:min-w-full translate-x-[var(--footer-kabelradio-offset)] transition-all">
							Ziggo: 912
						</li>
						<li class="lg:min-w-full translate-x-[var(--footer-kabelradio-offset)] transition-all">
							T-Mobile: 2086
						</li>
					</ul>
					<button
						id="footer__kabelradio__scrollRight"
						class="hidden lg:block whitespace-nowrap cursor-pointer px-2 clickable-large">❯</button
					>
				</div>
			</div>
			<div id="footer__fmradio" class="text-center max-w-md">
				<b>FM Radio</b>
				<ul class="flex">
					<li>107.3 MHz</li>
				</ul>
			</div>
			<div id="footer__DAB" class="text-center max-w-md">
				<b>DAB+</b>
				<ul class="flex">
					<li>Kanaal 5A (174,928 MHz)</li>
				</ul>
			</div>
			<div id="footer__online" class="text-center max-w-md">
				<b>Online Stream</b>
				<ul class="flex">
					<li>
						<a href="https://omroepede.nl/radio" class="clickable-large"
							>https://omroepede.nl/radio</a
						>
					</li>
				</ul>
			</div>
			<ul id="footer__socials" class="flex flex-row gap-8 lg:gap-4 flex-wrap mt-8 lg:mt-0">
				<li class="social-link">
					<a
						href="https://www.facebook.com/djkessie/"
						class="flex items-center gap-2 clickable-large"
					>
						<img
							class="h-10"
							height="96em"
							src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
						/>
						<!-- <span>Facebook</span> -->
					</a>
				</li>

				<li class="social-link">
					<a
						href="https://www.instagram.com/dancex.rtvrijnstreek/"
						class="flex items-center gap-2 clickable-large"
					>
						<img
							class="h-10"
							height="96em"
							src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
						/>
						<!-- <span>Instagram</span> -->
					</a>
				</li>

				<li class="social-link">
					<a href="https://omroepede.nl/" class="flex items-center gap-2 clickable-large">
						<img class="h-10" height="96em" src="./assets/img/icons/png/edefm.png" />
						<!-- <span>Omroep Ede</span> -->
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	:root {
		--footer-kabelradio-offset: 0%;
	}
</style>

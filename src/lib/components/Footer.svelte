<script>
	import id from '../../identity';
</script>

<footer id="footer" class="static lg:absolute lg:bottom-0 flex justify-center items-center w-full">
	<!-- TODO light vs dark theme -->
	<div
		id="footer__content"
		class="
                        flex flex-col flex-grow justify-between items-center 
                        max-w-7xl
                        bg-gray-800 lg:bg-white 
                        text-white lg:text-black
                "
	>
		<!-- border -->
		<div class="w-0 transition-all lg:w-[92%] max-w-7xl mt-2 border-t-2 border-black" />

		<div
			id="footer__information"
			class="
				flex flex-col lg:flex-row flex-grow justify-between items-center lg:items-start self-stretch 
					
				mx-8 mt-6 mb-4

				max-w-7xl

				relative gap-x-8"
		>
			<div id="footer__kabelradio" class="text-center max-w-[16rem] flex-1 overflow-hidden">
				<b>Digitale Kabelradio</b>
				<div class="relative flex flex-row marquee gap-x-4">
					<ul class="flex justify-between gap-x-4 ">
						<li class="whitespace-nowrap">KPN: 1015</li>
						<li class="whitespace-nowrap">XS4ALL: 1015</li>
						<li class="whitespace-nowrap">Solcon: 1215</li>
						<li class="whitespace-nowrap">Ziggo: 912</li>
						<li class="whitespace-nowrap">T-Mobile: 2086</li>
					</ul>
					<ul class="flex justify-between  gap-x-4 ">
						<li class="whitespace-nowrap">KPN: 1015</li>
						<li class="whitespace-nowrap">XS4ALL: 1015</li>
						<li class="whitespace-nowrap">Solcon: 1215</li>
						<li class="whitespace-nowrap">Ziggo: 912</li>
						<li class="whitespace-nowrap">T-Mobile: 2086</li>
					</ul>
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
					<li><a href="https://omroepede.nl/radio">https://omroepede.nl/radio</a></li>
				</ul>
			</div>
			<ul id="footer__socials" class="flex flex-row gap-4 flex-wrap">
				<li class="social-link">
					<a href="https://www.facebook.com/djkessie/" class="flex items-center gap-2">
						<img
							class="h-10"
							height="96em"
							src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
						/>
						<!-- <span>Facebook</span> -->
					</a>
				</li>

				<li class="social-link">
					<a href="https://www.instagram.com/dancex.rtvrijnstreek/" class="flex items-center gap-2">
						<img
							class="h-10"
							height="96em"
							src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
						/>
						<!-- <span>Instagram</span> -->
					</a>
				</li>

				<li class="social-link">
					<a href="https://omroepede.nl/" class="flex items-center gap-2">
						<img class="h-10" height="96em" src="./assets/img/icons/png/edefm.png" />
						<!-- <span>Omroep Ede</span> -->
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style lang="scss">
	.marquee {
		animation: marquee 30s linear infinite;
	}
	@keyframes marquee {
		0% {
			transform: translateX(0, 0);
		}
		100% {
			transform: translateX(-202%);
		}
	}
</style>

<script lang="ts">
	import id from '../../identity';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(async () => {
		const inject = (await import('@iconfu/svg-inject')).default;

		if (browser) {
			document.querySelectorAll('nav img[src$=".svg"]').forEach((img) => {
				inject(img);
			});
			const logo = document.querySelector('#header__logo');

			if (!logo) return;

			logo.addEventListener('click', (e) => {
				e.preventDefault();
				(document.querySelector('#content') as HTMLElement).scrollIntoView({
					behavior: 'smooth'
				});
			});
		}
	});
</script>

<header
	id="top"
	class="sticky top-0 flex justify-center items-center w-full text-3xl clr-bg-primary"
>
	<div id="header__content" class="flex flex-col flex-grow justify-between items-center max-w-7xl ">
		<nav
			id="header__navbar"
			class="
					flex flex-grow justify-between items-center self-stretch xl:items-end
					
					mx-8 mt-6 mb-4

					max-w-7xl
	
					relative
				"
		>
			<a
				id="header__logo"
				href="/"
				class="clr-text-primary"
				aria-label="Dance Experience"
				aria-labelledby="Dance Xperience"
			>
				<h1 class="flex flex-row items-end font-excluded text-4xl">
					<img
						class="
							transition-all 
							h-10
						"
						height="96em"
						id="header__logo-D"
						src="/assets/img/logo/svg/logo-D.svg"
						alt="D"
					/>
					<span
						class="
						flex flex-row items-end justify-end
						
						transition-all 
						
						translate-x-[-0.95rem] xl:translate-x-[-0.175rem] 
						
						overflow-clip max-w-0 xl:max-w-full leading-[0.6125] 
						"
					>
						<span class="block">ance</span>
					</span>
					<img
						class="
							transition-all 
							
							h-10 translate-x-[-0.95rem] xl:translate-x-0
						"
						height="96em"
						id="header__logo-X"
						src="/assets/img/logo/svg/logo-X.svg"
						alt="X"
					/>
					<span
						class="
						flex flex-row items-end justify-end

						transition-all 
						
						translate-x-[-0.95rem] xl:translate-x-[-0.175rem] 
						
						overflow-clip max-w-0 xl:max-w-full leading-[0.6125] 
						"
					>
						<span class="block">perience</span>
					</span>
				</h1>
			</a>
			<input id="header__navbar__menu-toggle" class="hidden" type="checkbox" />

			<label
				class="lg:hidden flex flex-col w-12 gap-1.5 justify-between relative p-1 cursor-pointer"
				for="menu-toggle"
				aria-label="Navigation Menu"
			>
				<div class="bg-black h-1.5" />
				<div class="bg-black h-1.5" />
				<div class="bg-black h-1.5" />
			</label>

			<ul
				class="
						transition-all duration-1000
						hidden
						fixed
						top-0 left-0
						bg-gray-900
						xl:leading-[0.8]
						lg:flex
						lg:static
						lg:gap-x-10
						lg:bg-transparent
					"
			>
				<li class="clickable">
					<a class="clr-text-primary transition-all" href="#aboutus">Over Ons</a>
				</li>
				<li class="clickable"><a class="clr-text-primary" href="#contact">Contact</a></li>
				<li class="clickable"><a class="clr-text-primary" href="#friends">Vriendenboek</a></li>
				<li class="clickable"><a class="clr-text-primary" href="#gallery">Fotoboek</a></li>
			</ul>
		</nav>
		<!-- border -->
		<div class="w-full transition-[width] lg:w-[92%] max-w-7xl mt-2 border-b-2 clr-border" />
	</div>
</header>

<style>
	#header__logo-X .cls-2,
	#header__logo-X .cls-3 {
		stroke: var(--text-primary);
	}
</style>

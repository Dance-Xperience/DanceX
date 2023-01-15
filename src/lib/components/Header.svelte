<script>
	import id from '../../identity';
</script>

<header id="top" class="flex justify-center w-full text-3xl">
	<nav
		id="header__navbar"
		class="
			flex flex-row justify-between 
			flex-1
			max-w-7xl
			
			mx-4
			my-2
		"
	>
		<a href="/" style="display:inline-block">
			<img id="header__logo" src="" alt={id.name} />
		</a>

		<input id="header__navbar__menu-toggle" class="hidden" type="checkbox" />
		<label class="flex" for="menu-toggle">
			<div class="block bg-white" />
		</label>

		<ul
			class="
				hidden 
				fixed
				top-0 left-0 

				bg-gray-900

				md:flex 
				md:static
				md:gap-x-16

				md:bg-transparent
			"
		>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
</style>

<script lang="ts">
	// Imports
	import id from '../identity';

	// Components
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	// Styles
	import '../app.css';

	// import '$lib/styles/colors.scss';
	import '$lib/styles/typography.scss';
	import '$lib/styles/design.scss';
	import '$lib/styles/colors.scss'
	// import '$lib/styles/layout.scss';
</script>

<svelte:head>
	<link rel="canonical" href={id.url} />
	<meta name="robots" content="index, follow" />

	<!-- Metadata -->
	<title>{`${id.name}`}</title>
	<meta name="keywords" content={`${id.name}, ${id.keywords.join(', ')}`} />
	<meta name="description" content={id.description} />

	<!-- Open Graph -->
	<meta property="og:site_name" content={id.name} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={id.url} />

	<meta property="og:title" content={`${id.name}`} />
	<meta property="og:description" content={id.description} />
	<meta property="og:image" content={`${id.url}/assets/img/logo/jpg/summary.jpg`} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:site" content={id.twitter.site} />
	<meta name="twitter:creator" content={id.twitter.creator} />

	<meta name="twitter:title" content={`${id.name}`} />
	<meta name="twitter:description" content={id.description} />
	<meta name="twitter:image" content={`${id.url}/assets/img/logo/jpg/summary.jpg`} />
</svelte:head>

<div class=" relative flex flex-col justify-between items-center min-h-screen">
	<Header />

	<section class="w-full flex flex-col justify-center items-center">
		<div id="content" class="max-w-7xl">
			<slot />
		</div>
	</section>

	<Footer />
</div>

<script>
	import {onMount} from 'svelte';
	import Header from './components/layouts/Header.svelte';
	import Main from './components/layouts/Main.svelte';
	import Footer from './components/layouts/Footer.svelte';
</script>

<section class="container">
	<Header/>
	<Main/>
	<Footer/>
</section>

<style>
	.container {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -40%);
		width: 100%;
		max-width: 42rem;
		border: 0.1rem solid #ddd;
		padding: 2.4rem;
	}
</style>
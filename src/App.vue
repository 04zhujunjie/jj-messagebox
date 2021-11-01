<template>
	<div id="app">
		<example></example>
	</div>
</template>

<script>
	import example from './components/example.vue'
	export default {
		name: 'App',
		components: {
			example
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		width: 100%;
	}
</style>

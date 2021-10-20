<template>
	<div class="hello">
		<div @click="showAlert">Alert</div>
		<div v-if="isShowAlert"><alert @close="close"></alert></div>
		
	</div>
</template>

<script>
	import alert from '../packages/jj-alert.vue'
	export default {
		name: 'HelloWorld',
		components: {
			alert
		},
		props: {
			msg: String
		},
		data() {
			return {
				isShowAlert: false,
			}
		},
		methods: {
			showAlert() {
				this.isShowAlert = true
			},
			close() {
				this.isShowAlert = false
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>

<template>
	<div class="hello">
		<div @click="showAlert">Alert</div>
		<div v-if="isShowAlert">
			<alert @close="close"></alert>
		</div>
		<div @click="showDialog">Dialog</div>
		<jj-dialog :visible="isShowDialog" :titleStyle="{'color':'#eee'}" title="提示" message="外层Dialog" @close = "isShowDialog=false">
			<jj-dialog width="60%" title="内层Dialog" :visible="innerVisible" @close='innerVisible=false' >
				
			</jj-dialog>
			<div slot="footer" style="height: 40px;">
				<button @click="innerVisible=true">打开内层Dialog</button>
			</div>
		</jj-dialog>
	</div>
</template>

<script>
	import alert from '../packages/jj-alert.vue'
	import jjDialog from '../packages/jj-dialog.vue'
	export default {
		name: 'HelloWorld',
		components: {
			alert,
			jjDialog
		},
		props: {
			msg: String
		},
		data() {
			return {
				isShowAlert: false,
				isShowDialog: false,
				innerVisible:false,
			}
		},
		methods: {
			showAlert() {
				this.isShowAlert = true
			},
			close() {
				this.isShowAlert = false
			},
			showDialog() {
				this.isShowDialog = true
			},
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

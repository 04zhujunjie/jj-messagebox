<template>
	<div class="hello">
		<div @click="showAlert">Alert</div>
		<div @click="showDialog">Dialog</div>
		<jj-dialog :visible="isShowDialog" :titleStyle="{'color':'#eee'}" title="提示" message="外层Dialog"
			@close="isShowDialog=false">
			<jj-dialog width="60%" title="内层Dialog" :visible="innerVisible" @close='innerVisible=false'>

			</jj-dialog>
			<div slot="footer" style="height: 40px;">
				<div @click="innerVisible=true">打开内层Dialog</div>
			</div>
		</jj-dialog>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		data() {
			return {
				isShowAlert: false,
				isShowDialog: false,
				innerVisible: false,
			}
		},
		methods: {
			showAlert() {
			const alert = this.$jj_alert({
				type:'sheet',
					title: 'tishi',
					btns: [{
						name:"cancel"
					},{
						name: "confirm",
						isTouchClose:false,
						click:()=>{
							alert.close()
						}
					}]
				})

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

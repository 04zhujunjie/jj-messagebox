<template>
	<div class="flexColumnCenter marginLeftRight marginTopBottom">
		<div class="flexRow marginTopBottom">
			<button class="btn" @click="showNormalAlert">
				默认Alert
			</button>
			<button class="btn" style="margin-left: 20px;" @click="showCustomAlert('alert',false)">
				没有按钮的Alert
			</button>
			<button class="btn marginLeftRight" @click="showCustomAlert('alert')">
				自定义Alert
			</button>
			<button class="btn" @click="showCustomAlert('sheet')">
				自定义Sheet
			</button>
		</div>
		<div class="flexRow marginTopBottom">
			<button class="btn" @click="showDialog">Dialog</button>
		</div>
		<jj-dialog :visible="isShowDialog" :titleStyle="{'color':'red'}" title="提示" message="外层Dialog"
			@close="isShowDialog=false">
			<jj-dialog width="60%" title="内层Dialog" :visible="innerVisible" @close='innerVisible=false'>

			</jj-dialog>
			<div slot="footer">
				<button class="btn" style="margin-bottom: 20px;" @click="innerVisible=true">打开内层Dialog</button>
			</div>
		</jj-dialog>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {

		},
		data() {
			return {
				isShowDialog: false,
				innerVisible: false,
			}
		},
		methods: {
			showNormalAlert() {
				this.$jj_alert({
					title: '提示',
					message: '时间就像海绵里的水,\n只要愿挤总还是有的。'
				})
			},
			showCustomAlert(type, isShowBtn = true) {
				const alert = this.$jj_alert({
					type: type, //弹窗的类型有alert和sheet
					width: '60%', //设置弹窗的宽度
					padding: '20px 30px', //设置内容的上下左右偏移
					maskColor: "rgba(0, 0, 0, 0.6)", //遮罩层的背景颜色
					isTouchClose: true, //点击背景图层，是否关闭弹框
					isShowClose: true, //是否显示右上角的关闭按钮
					closeStyle: {
						'height': '15px',
						'width': '15px'
					},
					title: '提示', //标题
					titleStyle: {
						'color': '#fb2408',
						'font-size': '20px'
					}, //标题的样式
					message: '事实上确实是当我们失去的时候，才知道自己曾经拥有；但有没有注意到当有些东西来临的时候，我们已错过。', //内容
					messageStyle: {
						"justify-content": 'left',
						"display": "flex",
						"color": '#8a8a8a',
						'text-align': 'left'
					}, //内容的样式
					btns: isShowBtn===false?[]:[{
						name: "Cancel",
						click: () => {
							console.log("点击Cancel")
						}
					}, {
						name: "Destructive",
						style: {
							'color': 'red'
						},
						click: () => {
							console.log("点击Destructive")
						}
					}, {
						name: "Confirm",
						style: {
							'background-color': '#2A8AFF',
							'color': '#fff'
						},
						isTouchClose: false, //点击按钮时，是否自动关闭弹窗
						click: () => {
							console.log("点击Destructive")
							/*
							有时候需要进行网络请求完成后，在进行关闭弹窗
							这时候可以选择手动关闭弹窗
							*/
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
	.flexColumnCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.flexRow {
		display: flex;
		flex-direction: row;
	}

	.marginTopBottom {
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.marginLeftRight {
		margin-right: 20px;
		margin-left: 20px;
	}

	.btn {
		border-radius: 5px;
		background-color: #2A8AFF;
		border-color: #FFFFFF;
		color: #FFFFFF;
		padding: 0px 20px;
		height: 44px;
	}
</style>

<template>
	<div class="flexColumnCenter">
		<div class="flexRow marginTopBottom">
			<button class="btn" @click="showNormalAlert">
				默认Alert
			</button>
			<button class="btn" style="margin-left: 10px;" @click="showCustomAlert('alert',false)">
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
		<div class="flexRow marginTopBottom">
			<button class="btn" @click="showPopup">Popup</button>
		</div>
		<div class="flexRow marginTopBottom">
			<button class="btn" @click="showLoading('default')">Loading</button>
			<button class="btn" style="margin-left: 10px;" @click="showLoading('round')">Loading-round</button>
			<button class="btn marginLeftRight" @click="showLoading('taichi')">Loading-taichi</button>
			<button class="btn" @click="showLoading('custom')">Loading-自定义</button>
		</div>
		<jj-dialog :visible="isShowDialog" :titleStyle="{'color':'red'}" title="提示" message="外层Dialog"
			@close="isShowDialog=false">
			<jj-dialog width="60%" title="内层Dialog" :visible="innerVisible" @close='innerVisible=false'>

			</jj-dialog>
			<div slot="footer">
				<button class="btn" style="margin-bottom: 10px;" @click="innerVisible=true">打开内层Dialog</button>
			</div>
		</jj-dialog>
		<jj-popup :visible="isShowPopup" :background="background" @close="isShowPopup=false" :showClose="true"
			title="请选择" :touchClose="true">
			<div> 今天天气不错</div>
		</jj-popup>
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
				isShowPopup: false,
				// background:require('../assets/background_image.jpeg')
				background: 'url(' + require('../assets/background_image.jpeg') + ') 0% 0% / cover fixed'
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
					touchClose: true, //点击背景图层，是否关闭弹框
					showClose: true, //是否显示右上角的关闭按钮
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
					btns: isShowBtn === false ? [] : [{
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
						touchClose: false, //点击按钮时，是否自动关闭弹窗
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
			showPopup() {
				this.isShowPopup = true
			},
			showLoading(type) {
				const loadingData = {
					imageSize: {
						width: '32px',
						height: '32px'
					}, //设置图片的大小
					userInteractionEnabled: true,//是否启用用户交互，默认是false,启用后，遮罩层下的图层事件允许点击
					type: type //设置加载框的类型，有default、round、taichi三种
				}
				if (type === 'custom') {
					loadingData['imageUrl'] = require('../assets/loading_custom.png') //图片的大小
					loadingData['background'] = '#fff' //设置弹框内容的背景色
					loadingData['message'] = '自定义...' //自定义文本
					loadingData['messageStyle'] = {
						color: '#000',
						'font-size': '17px'
					} //修改文本样式
					loadingData['maskColor'] = 'rgba(0, 0, 0, 0.5)' //设置遮罩层的背景色
				} else if (type === 'round') {
					loadingData['message'] = 'round...'
				} else if (type === 'taichi') {
					loadingData['message'] = 'taichi...'
				}
				let loading = this.$jj_loading(loadingData)
				// loading.$set('message',message)
				setTimeout(() => {
					console.log(12334,loading)
					loading.close()
				}, 3000)
			}
		}
	}
</script>


<style scoped>
	.flexColumnCenter {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.flexRow {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
	}

	.marginTopBottom {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.marginLeftRight {
		margin-right: 10px;
		margin-left: 10px;
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

<template>
	<div id = 'jj-loading-id' class="messagebox-shade" :style="{'background-color':maskColor,'pointer-events': userInteractionEnabled?'none':'auto'}">
		<div class="messagebox-main" :style="{'width':width,'minHeight':minHeight,'background':background,'border-radius':radius+'px'}">
			<div v-if="message.length > 0" class="messagebox-content" :style="{'padding':padding}">
				<div class="flexContentCenter">
					<img class="image" :style="{'animation-duration':duration+'s'}" :width="setImageSize.width" :height="setImageSize.height" :src="imgUrl" />
					<span class="message" style="margin-top: 6px;" :style="messageStyle">{{message}}</span>
				</div>
			</div>
			<div v-else class="imageCenter" :style="setImageSize">
				<img class="image" :width="setImageSize.width" :height="setImageSize.height" :src="imgUrl" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jj-loading',
		data() {
			return {
				type:'default',//default、round、taichi、
				duration:1.5,//动画时间
				radius:5,//圆角
				isClose:false, //关闭弹框
				userInteractionEnabled:false,//是否启用用户交互，默认是false,启用后，遮罩层下的图层事件允许点击
				maskColor: "transparent", //遮罩层的背景颜色
				background: 'rgba(0, 0, 0, 0.8)', //弹窗的背景
				padding: '15px 10px 10px 10px',
				width: '85px',//弹窗的大小
				minHeight:'85px',
				imageSize: {
					width: '32px',
					height: '32px'
				},
				imageUrl:"",
				message: "",//弹窗的内容
				messageStyle: {}, //内容的样式
			}
		},
		computed: {
			setImageSize() {
				let size = {}
				size.width = this.imageSize.width || '32px'
				size.height = this.imageSize.height || '32px'
				return size
			},
			imgUrl(){
				if ((this.imageUrl || '').length > 0){
					return this.imageUrl
				}
				if (this.type === 'round'){
					return require('../static/jj_loading_round_icon.png')
				}else if (this.type === 'taichi'){
					return require('../static/jj_loading_taichi_icon.png')
				}
				return require('../static/jj_loading_icon.png')
			}
		},
		methods: {
			close() {
				if (this.$el){
					this.$el.remove()
				}
			},
		}
	}
</script>

<style scoped>
	@import "../jj-messagebox.css";
	@import "../jj-pop.css";

	.flexContentCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.imageCenter {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.image {
		background-repeat: no-repeat;
		background-size: contain;
		animation: turn 1.5s linear infinite;
	}

	.message {
		color: #FFFFFF;
		font-size: 14.5px;
		word-break: break-all;
		white-space: pre-wrap;
	}

	@keyframes turn {
		0% {
			-webkit-transform: rotate(0deg);
		}

		50% {
			-webkit-transform: rotate(180deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}
	}
</style>

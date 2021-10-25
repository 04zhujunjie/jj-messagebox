<template>
	<div class="shade" :style="{'background-color':maskColor}">
		<div class="main popIn" :style="{'width':width,'minHeight':width,'background':background}">
			<div v-if="message.length > 0" class="content" :style="{'padding':padding}">
				<div class="flexContentCenter">
					<img class="image" :width="setImageStyle.width" :height="setImageStyle.height" :src="imgUrl" />
					<span class="message" style="margin-top: 5px;" :style="messageStyle">{{message}}</span>
				</div>

			</div>
			<div v-else class="imageCenter" :style="setImageSize">
				<img class="image" :width="setImageStyle.width" :height="setImageStyle.height" :src="imgUrl" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jj-loading',
		data() {
			return {
				type:'',
				maskColor: "transparent", //遮罩层的背景颜色
				background: 'rgba(0, 0, 0, 0.8)', //弹窗的背景
				padding: '15px 10px',
				width: '85px',
				imageSize: {
					width: '32px',
					height: '32px'
				},
				message: "加载中...",
				messageStyle: {},
			}
		},
		computed: {
			setImageSize() {
				let size = {}
				size.width = this.imageSize.width || '32px'
				size.height = this.imageSize.height || '32px'
				return size
			},
			setImageStyle() {
				let style = this.setImageSize
				return style
			},
			imgUrl(){
				return require('../static/jj_loading_icon.png')
			}
		},
		methods: {
			close() {
				this.$el.remove()
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
		/* background: url(../static/jj_loading_icon.png); */
		background-repeat: no-repeat;
		background-size: contain;
		animation: turn 1.2s linear infinite;
	}

	.message {
		color: #FFFFFF;
		font-size: 13px;
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

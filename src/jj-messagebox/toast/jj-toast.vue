<template>
	<div id='jj-toast-id' class="messagebox-shade"
		:style="{'background-color':maskColor,'pointer-events': 'none'}">
		<div class="messagebox-main"
			:style="{'width':'auto','minWidth':minWidth,'maxWidth':maxWidth,'background':background,'border-radius':radius+'px'}">
			<div class="messagebox-content" :style="{'padding':padding}">
				<div v-if="imgUrl.length > 0" class="flexContentCenter">
					<div style="margin-bottom: 6px;" :style="setImageSize">
						<img class="image" :width="setImageSize.width" :height="setImageSize.height" :src="imgUrl" />
					</div>
				</div>
				<div class="flexContentCenter">
					<span class="message" :style="messageStyle">{{message}}</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jj-toast',
		data() {
			return {
				type: '', //有success，fail，warn
				duration: 2.5, //动画时间
				radius: 5, //圆角
				isClose:false, //关闭弹框
				maskColor: "transparent", //遮罩层的背景颜色
				background: 'rgba(0, 0, 0, 0.8)', //弹窗的背景
				padding: '12px',
				imageSize: {
					width: '32px',
					height: '32px'
				},
				imageUrl: "",
				maxWidth: '80%', //弹窗的大小
				minWidth: '85px',
				message: "", //弹窗的内容
				messageStyle: {}, //内容的样式
			}
		},
		mounted() {

		},
		computed: {
			setImageSize() {
				let size = {}
				size.width = this.imageSize.width || '32px'
				size.height = this.imageSize.height || '32px'
				return size
			},
			imgUrl() {
				if ((this.imageUrl || '').length > 0) {
					return this.imageUrl
				}
				if (this.type === 'success') {
					return require('../static/success_icon.png')
				} else if (this.type === 'fail') {
					return require('../static/fail_icon.png')
				} else if (this.type === 'warn') {
					return require('../static/warn_icon.png')
				}
				return ''
			}
		},
		methods: {
			close() {
				if (this.$el) {
					this.$el.remove()
				}
			},
		}
	}
</script>

<style scoped>
	@import "../jj-messagebox.css";

	.flexContentCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.image {
		background-repeat: no-repeat;
		background-size: contain;
	}
	.message {
		color: #FFFFFF;
		font-size: 14.5px;
		word-break: break-all;
		text-align: center;
		white-space: pre-wrap;
	}
</style>

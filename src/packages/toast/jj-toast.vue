<template>
	<div id = 'jj-toast-id' v-if="message.length > 0" class="messagebox-shade" :style="{'background-color':maskColor,'pointer-events': 'none'}">
		<div class="messagebox-main"  :style="{'width':'auto','maxWidth':maxWidth,'background':background,'border-radius':radius+'px'}">
			<div  class="messagebox-content" :style="{'padding':padding}">
				<span class="message" :style="messageStyle">{{message}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jj-toast',
		data() {
			return {
				duration:2.5,//动画时间
				radius:5,//圆角
				maskColor: "transparent", //遮罩层的背景颜色
				background: 'rgba(0, 0, 0, 0.8)', //弹窗的背景
				padding: '12px',
				maxWidth: '80%',//弹窗的大小
				message: "",//弹窗的内容
				messageStyle: {}, //内容的样式
			}
		},
		mounted() {
		
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
	.message {
		color: #FFFFFF;
		font-size: 14.5px;
		word-break: break-all;
		text-align: left;
		white-space: pre-wrap;
	}
</style>

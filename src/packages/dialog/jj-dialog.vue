<template>
	<div v-if="jj_visible" class="dialog">
		<div class="shade" :style="{'background-color':maskColor}"  @click="touchClose?close():''">
			<div class="main" :style="{'width':width}">
				<div class="content" :style="{'padding':padding}">
					<div v-if="showClose" class="rightTopClose" @click="close"></div>
					<div v-if="title.length > 0" class="flexCenter" :style="titleStyle"><span>{{title}}</span></div>
					<div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="messageStyle"><span>{{message}}</span></div>
					<slot></slot>
				</div>
				<slot name="footer"></slot>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'jj-dialog',//需要设置名字，在index.js文件注册插件的时候用到这个名字，这个名字作为改组件的名字
		props: {
			visible: {
				//是否显示遮罩层
				type: Boolean,
				default: false,
			},
			maskColor: {
				//遮罩层的背景颜色
				type: String,
				default: "rgba(0, 0, 0, 0.35)",
			},
			touchClose: {
				//点击背景图层，是否关闭弹框
				type: Boolean,
				default: false,
			},
			showClose: {
				//是否显示右上角的关闭按钮
				type: Boolean,
				default: true
			},
			title: {
				//标题
				type: String,
				default: ''
			},
			titleStyle: {
				//标题样式
				type: Object,
				default: function(){
					return {}
				}
			},
			message: {
				//信息内容
				type: String,
				default: ''
			},
			messageStyle: {
				//信息内容的样式
				type: Object,
				default: function(){
					return {}
				}
			},
			width: {
				////内容显示框的大小，可以按照窗口的百分比指定大小，也可以是具体px,如300px
				type: String,
				default: '80%'
			},
			padding: {
				type: String,
				default: '20px'
			}
		},
		watch: {
			visible: {
				handler(newVal) {
					this.jj_visible = newVal
				},
				immediate: true
			},
		},
		data() {
			return {
				jj_visible: this.visible
			}
		},
		computed: {},
		methods: {
			close() {
				this.$emit('close')
				this.jj_visible = false
			}
		}
	}
</script>

<style scoped>
	@import "../jj-messagebox.css";
	.dialog {
		display: flex;
		flex-direction: column;
	}
</style>

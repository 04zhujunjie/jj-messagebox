<template>
	<div v-if="jj_visible" class="jj-popup">
		<div class="messagebox-shade" :class="[!isPopup?'fadelogOutOpcity':'']"  style="justify-content:end;align-items: flex-end;" :style="{'background-color':maskColor}"  @click="touchClose?close():''">
			<div class="messagebox-main fadelogIn" @animationend="animationend" @click="mainClick" :class="[isPopup?'':'fadelogOut']"  
			style = "margin:0px;width: 100%;border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;" 
			:style="{'animation-duration':duration+'s','height':height,'background':background,'border-top-left-radius':radius+'px','border-top-right-radius':radius+'px'}">
				<div class = "background-content">
					<slot name="backgroundContent"></slot>
				</div>
				<div class="messagebox-content" :style="{'padding':padding}">
					<div v-if="showClose" class="rightTopClose" @click="close">
						<div class="closeImage" :style="closeStyle"> </div>
					</div>
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
		name: 'jj-popup',//需要设置名字，在index.js文件注册插件的时候用到这个名字，这个名字作为改组件的名字
		props: {
			visible: {
				//是否显示
				type: Boolean,
				default: false,
			},
			duration:{
				//动画时间
				type: Number,
				default: 0.25,
			},
			radius:{
				//圆角
				type: Number,
				default: 5,
			},
			background:{
				//弹窗的背景
				type: String,
				default: "#fff",
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
			closeStyle: {
				//关闭按钮的样式
				type: Object,
				default: function(){
					return {}
				}
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
			height: {
				////内容显示框的大小，可以按照窗口的百分比指定大小，也可以是具体px,如300px
				type: String,
				default: '60%'
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
					if(newVal&&!this.isPopup){
						this.isPopup = true
					}
				},
				immediate: true
			},
		},
		data() {
			return {
				jj_visible: this.visible,
				isPopup:true,
			}
		},
		computed: {},
		methods: {
			close() {
				if (!this.isPopup){
						return
					}
					this.isPopup = false
			},
			animationend(){
				if(!this.isPopup){
					//弹窗消失结束后
					this.$emit('close')
					this.isPopup = true
					this.jj_visible = false
				}
			},
			mainClick(e) {
				//阻止事件冒泡
				e.stopPropagation()
			},
		}
	}
</script>

<style scoped>
	@import "../jj-messagebox.css";
	@import "../jj-fadelog.css";
	.jj-popup {
		display: flex;
		flex-direction: column;
	}
</style>

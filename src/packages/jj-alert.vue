<template>
	<div class="shade" @click="isTouchClose?close():''">
		<div class="main">
			<div class="content">
				<div v-if="isShowClose" class="rightTopClose" @click="close">x</div>
				<div v-if="title.length > 0" class="flexCenter" :style="titleStyle"><span>{{title}}</span></div>
				<div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="messageStyle"><span>{{message}}</span></div>
			</div>
			<div class="btns">
				<div class="btn" v-for="(btn,index) in btns" :style="btnStyle(btn)" :key="index"
					@click="clickFn($event,btn)">{{btn.title}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isTouchClose: false, //点击背景图层，是否关闭弹框
				isShowClose:false,//是否显示右上角的关闭按钮
				title:"提示提示",
				titleStyle:{},
				// titleStyle:{"justify-content":'left',"display": "flex","color":'#fe2','text-align':'left'},
				message:"",
				messageStyle:{},
				btns: [{
						title: "取消取消取消",
						style: {
							"font-size": '12px'
						},
						isTouchClose: true, //点击按钮，是否触摸后进行关闭弹框
						click: () => {
							console.log("取消取消取消")
						},
					},
					{
						title: "确认",
						style: {
							"color": '#fff',
							'background': '#2A8AFF'
						},
						click: () => {
							console.log("确认")
						}
					},
					{
						title: "确认",
						click: () => {
							console.log("确认")
						}
					}
				]
			}
		},
		methods: {
			close() {
				this.$el.remove()
			},
			btnStyle(btn) {
				let length = this.btns.length

				let style = {}
				style['width'] = 100 / length + '%'
				if (btn.style instanceof Object) {
					//样式的合并
					Object.assign(style, btn.style)
				}
				return style
			},
			clickFn(e, btn) {
				//阻止事件冒泡
				e.stopPropagation()
				if (btn.isTouchClose || false) {
					this.close()
				}
				if (btn.click !== undefined) {
					if (btn.click instanceof Function) {
						btn.click()
					} else {
						console.warn("请传入回调函数")
					}
				}
			}
		}
	}
</script>

<style scoped>
	@import "./jj-messagebox.css";

    .flexCenter{
		display: flex;
		justify-content: center;
	}
	.rightTopClose {
		width: 40px;
		height: 40px;
		font-size: 1.5rem;
		text-align: center;
		position: absolute;
		top: 0px;
		right: 0px;
	}

	.btns {
		height: 45px;
		box-sizing: border-box;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: space-around;
		align-items: center;

	}

	.btn {
		flex: 1 0 auto;
		height: 100%;
		display: flex;
		font-size: 17px;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	}

	.btn:last-child {
		border-right: none;
	}

	.btn:active {
		color: white;
		background-color: blue;
	}
</style>

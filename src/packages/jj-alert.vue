<template>
	<div class="shade" @click="isTouchClose?close():''">
		<div class="main" :style="{'width':contentWidth}">
			<div class="content">
				<div v-if="isShowClose" class="rightTopClose" @click="close">x</div>
				<div v-if="title.length > 0" class="flexCenter" :style="titleStyle"><span>{{title}}</span></div>
				<div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="messageStyle"><span>{{message}}</span></div>
			</div>
			<div v-if="type === 'alert'">
				<div class="btns flexContentSpaceAround">
					<div class="btn" v-for="(btn,index) in btns" :style="btnStyle(btn)" :key="index"
						@click="clickFn($event,btn)">{{btn.title}}
					</div>
				</div>
			</div>
			<div v-else>
				<div class="btns flexContentCenter" v-for="(btn,index) in btns" :key="index">
					<div class="btn" :style="btnStyle(btn)" 
						@click="clickFn($event,btn)">{{btn.title}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				type:'alert', //有alert和sheet
				isTouchClose: false, //点击背景图层，是否关闭弹框
				isShowClose:false,//是否显示右上角的关闭按钮
				contentWidth:'80%',//内容显示框的大小，可以按照窗口的百分比指定大小，也可以是具体px,如300px
				title:"提示",
				titleStyle:{},
				// titleStyle:{"justify-content":'left',"display": "flex","color":'#fe2','text-align':'left'},
				message:"fjeojfoefjeofjeo",
				messageStyle:{},
				btns: [{
						title: "确认",
						style: {
							"color": '#fff',
							'background': '#2A8AFF'
						},
						isTouchClose: true, //点击按钮，是否自动关闭弹框
						click: () => {
							console.log("按钮被点击")
						},
					},
				]
			}
		},
		computed:{
		},
		methods: {
			close() {
				this.$emit('close')
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
				if (this.type === 'sheet'){
					style['flex-direction'] = 'column'
					style['width'] = '100%'
					style['border-right'] = '0px'
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

    .flexContentCenter{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}
	.flexContentSpaceAround{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.btns {
		
		box-sizing: border-box;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	.btn {
		flex: 1 0 auto;
		height: 2.75rem;
		display: flex;
		font-size: 1.0625rem;
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
		background-color: #2A8AFF;
	}
</style>

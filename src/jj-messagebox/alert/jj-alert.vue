<template>
	<div class="messagebox-shade" id = 'jj-alert-id' :style="{'background-color':maskColor}" @click="touchClose?close():''">
		<div class="messagebox-main popIn" :class="[isCloseAlert?'popOut':'']" @click="mainClick"
			:style="{'animation-duration':duration+'s','width':width,'border-radius':radius+'px'}">
			<div class="messagebox-content" :style="{'padding':padding}">
				<div v-if="showClose" class="rightTopClose" :style="closeStyle" @click="close"></div>
				<div v-if="title.length > 0" class="flexCenter" style="font-size: 1.125rem;" :style="titleStyle">
					<span>{{title}}</span>
				</div>
				<div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="messageStyle">
					<span>{{message}}</span>
				</div>
			</div>
			<div v-if="type === 'alert'" class="jj-alert-btns flexContentSpaceAround">
				<div class="jj-alert-btn" v-for="(btn,index) in btns" :id="btnId(index)" :style="btnStyle(btn)"
					:key="index" @click="clickFn($event,btn)" @mouseup="mouseup(index,btn)"
					@mousedown="mousedown(index,btn)">
					{{btn.title}}
				</div>
			</div>
			<div v-else class="jj-alert-btns flexContentCenter" v-for="(btn,index) in btns" :key="index">
				<div class="jj-alert-btn" :style="btnStyle(btn)" :id="btnId(index)" @click="clickFn($event,btn)"
					@mouseup="mouseup(index,btn)" @mousedown="mousedown(index,btn)">{{btn.title}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jj-alert',
		data() {
			return {
				type: 'alert', //有alert和sheet
				duration: 0.25, //动画时间
				radius: 5, //圆角
				maskColor: "rgba(0, 0, 0, 0.35)", //遮罩层的背景颜色
				background: '#fff', //弹窗的背景
				touchClose: false, //点击背景图层，是否关闭弹框
				isClose:false, //关闭弹框
				closeStyle: {}, //右上方关闭按钮的样式
				showClose: false, //是否显示右上角的关闭按钮
				width: '80%', //内容显示框的大小，可以按照窗口的百分比指定大小，也可以是具体px,如300px
				padding: '20px',
				title: "",
				titleStyle: {},
				// titleStyle:{"justify-content":'left',"display": "flex","color":'#fe2','text-align':'left'},
				message: "",
				messageStyle: {},
				btns: [{
					title: "确认",
					activeBackground: "transparent",
					activeColor: '',
					style: {
						"color": '#000',
						'background': '#fff'
					},
					touchClose: true, //点击按钮，是否自动关闭弹框
					isDisable:false,
					click: () => {
						// console.log("按钮被点击")
					},
				}, ],
				isCloseAlert: false,
			}
		},
		methods: {
			btnId(index) {
				return "jj_alert_btn_id" + index
			},
			close() {
				if (this.$el){
					if (this.isCloseAlert) {
						return
					}
					this.$emit('close')
					this.isCloseAlert = true
					let that = this
					let time = that.duration*1000
					if (time > 20){
						time  = time-20
					}
					setTimeout(function() {
						that.$el.remove()
					}, time)
				}

			},
			mainClick(e) {
				//阻止事件冒泡
				e.stopPropagation()
			},
			btnStyle(btn) {
				let length = this.btns.length
				let style = {}
				style['width'] = 100 / length + '%'
				if (btn.style instanceof Object) {
					//样式的合并
					Object.assign(style, btn.style)
				}
				if (this.type === 'sheet') {
					style['flex-direction'] = 'column'
					style['width'] = '100%'
					style['border-right'] = '0px'
				}
				return style
			},
			clickFn(e, btn) {
				//阻止事件冒泡
				e.stopPropagation()
				
				if (btn.isDisable === true){
					//按钮禁用
					return
				}
				if (btn.touchClose != false) {
					this.close()
				}
				if (btn.click !== undefined) {
					if (btn.click instanceof Function) {
						btn.click()
					} else {
						console.warn("请传入回调函数")
					}
				}
			},
			setupBtnActive(isDown = false, index, btn) {
				if (btn.isDisable === true){
					//按钮禁用
					return
				}
				const activeBackground = btn.activeBackground || ''
				const activeColor = btn.activeColor || ''
				if (activeBackground.length > 0 || activeColor.length > 0) {

					if (isDown === true) {
						let btnElement = document.getElementById(this.btnId(index))
						//鼠标按下去
						if (activeBackground.length > 0) {
							btnElement.style.background = activeBackground
						}
						if (activeColor.length > 0) {
							btnElement.style.color = activeColor
						}
					} else {
						//鼠标松开
						if (btn.touchClose === false) {
							let btnElement = document.getElementById(this.btnId(index))
							//需要手动关闭alert
							let background = '#fff'
							let color = "#000"
							if ((btn.style.background || '').length > 0) {
								background = btn.style.background
							} else if ((btn.style.backgroundColor || '').length > 0) {
								background = btn.style.backgroundColor
							}
							if ((btn.style['background-color'] || '').length > 0) {
								background = btn.style['background-color']
							}
							if ((btn.style.color || '').length > 0) {
								color = btn.style.color
							}
							setTimeout(function() {
								btnElement.style.background = background
								btnElement.style.color = color
							}, 150)

						}
					}
				}
			},
			mousedown(index, btn) {
				this.setupBtnActive(true, index, btn)
			},
			mouseup(index, btn) {
				this.setupBtnActive(false, index, btn)
			}
		}

	}
</script>

<style scoped>
	@import "../jj-messagebox.css";
	@import "../jj-pop.css";

	.flexCenter {
		display: flex;
		justify-content: center;
	}

	.flexContentCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.flexContentSpaceAround {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.jj-alert-btns {

		box-sizing: border-box;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	.jj-alert-btn {
		flex: 1 0 auto;
		height: 2.75rem;
		display: flex;
		font-size: 1.0625rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-right: 1px solid rgba(0, 0, 0, 0.1);
	}

	.jj-alert-btn:last-child {
		border-right: none;
	}
</style>

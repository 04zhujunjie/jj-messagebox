<template>
	<div id='jj-alert-id'>
		<template v-if="position==='bottom' || type === 'sheet'">
			<div class="messagebox-shade" :class="[isCloseAlert?'fadelogOutOpcity':'']" style="justify-content:flex-end;align-items: flex-end;"  :style="{'background-color':maskColor}"
				@click="touchClose?close():''">
				<div class="sheet-box">
					<div class="messagebox-main fadelogIn" @animationend="animationend" :class="[isCloseAlert?'fadelogOut':'']" @click="mainClick"
						:style="{'animation-duration':duration+'s','width':alertWidth,'border-radius':radius+'px'}">
						<div class="messagebox-content" :style="{'padding':padding}">
							<div v-if="showClose" class="rightTopClose" @click="close">
								<div class="closeImage" :style="closeStyle"> </div>
							</div>
							<div v-if="title.length > 0" class="flexCenter" style="font-size: 1.125rem;" :style="titleStyle">
								<span>{{title}}</span>
							</div>
              <div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="messageStyle">
                <span v-if="!isUseHTMLString">{{message}}</span>
                <div v-else v-html="message"></div>
              </div>
						</div>
						<div v-if="buttonDirection === 'row'" class="jj-alert-btns flexContentSpaceAround">
							<div class="jj-alert-btn" v-for="(btn,index) in btns" :id="btnId(index)" :style="[btnStyle(btn)]"
								:key="index" @click="clickFn($event,btn)" @mouseup="mouseup(index,btn)"
								@mousedown="mousedown(index,btn)">
								{{btn.title}}
							</div>
						</div>
						<div v-else>
							<div  class="jj-alert-btns flexContentCenter" v-for="(btn,index) in btns" :key="index">
								<div class="jj-alert-btn" :style="[btnStyle(btn)]" :id="btnId(index)" @click="clickFn($event,btn)"
									@mouseup="mouseup(index,btn)" @mousedown="mousedown(index,btn)">{{btn.title}}
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</template>
		<template v-else>
			<div class="messagebox-shade" :class="[isCloseAlert?'fadelogOutOpcity':'']" :style="{'background-color':maskColor}"
				@click="touchClose?close():''">
				<div class="messagebox-main popIn" @animationend="animationend" :class="[isCloseAlert?'popOut':'']" @click="mainClick"
					:style="{'animation-duration':duration+'s','width':alertWidth,'border-radius':radius+'px'}">
					<div class="messagebox-content" :style="{'padding':padding}">
						<div v-if="showClose" class="rightTopClose" @click="close">
							<div class="closeImage" :style="closeStyle"> </div>
						</div>
						<div v-if="title.length > 0" class="flexCenter" style="font-size: 1.125rem;" :style="titleStyle">
							<span>{{title}}</span>
						</div>
            <div v-if="message.length > 0" class="flexCenter" style="margin-top: 10px;" :style="messageStyle">
              <span v-if="!isUseHTMLString">{{message}}</span>
              <div v-else v-html="message"></div>
            </div>
					</div>
					<div v-if="buttonDirection === 'row'" class="jj-alert-btns flexContentSpaceAround">
						<div class="jj-alert-btn" v-for="(btn,index) in btns" :id="btnId(index)" :style="[btnStyle(btn)]"
							:key="index" @click="clickFn($event,btn)" @mouseup="mouseup(index,btn)"
							@mousedown="mousedown(index,btn)">
							{{btn.title}}
						</div>
					</div>
					<div v-else class="jj-alert-btns flexContentCenter" v-for="(btn,index) in btns" :key="index">
						<div class="jj-alert-btn" :style="[btnStyle(btn)]" :id="btnId(index)" @click="clickFn($event,btn)"
							@mouseup="mouseup(index,btn)" @mousedown="mousedown(index,btn)">{{btn.title}}
						</div>
					</div>
				</div>
			</div>
		</template>

	</div>

</template>

<script>
	import {getData} from './index.js'
	export default {
		name: 'jj-alert',
		data() {
			return {
				type: 'alert', //有alert和sheet
				position: 'center', //有center和bottom
				btnDirection: 'row', //按钮的排列方向,row和column
				duration: 0.25, //动画时间
				radius: 5, //圆角
				maskColor: "rgba(0, 0, 0, 0.35)", //遮罩层的背景颜色
				background: '#fff', //弹窗的背景
				touchClose: false, //点击背景图层，是否关闭弹框
				isClose: false, //关闭弹框
				closeStyle: {}, //右上方关闭按钮的样式
				showClose: false, //是否显示右上角的关闭按钮
        isQuickClose:false,//是否开启快速关闭，设置true时，关闭时没有动画效果
        isUseHTMLString:false,//是否将 message 属性作为 HTML 片段处理
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
					isDisable: false,
					click: () => {
						// console.log("按钮被点击")
					},
				}, ],
				isCloseAlert: false,
			}
		},
		computed: {
			buttonDirection() {
				if (this.type === 'sheet') {
					return 'column'
				}
				if (this.btnDirection.length > 0 && (this.btnDirection === 'row' || this.btnDirection === 'column')) {
					return this.btnDirection
				}
				return 'row'
			},
			alertWidth() {
				if (this.type === 'sheet') {
					return '100%'
				}
				if (this.width.length > 0) {
					return this.width
				}
				if(this.position !== 'bottom'){
					return '100%'
				}else{
					return '85%'
				}
			}
		},
		methods: {
			btnId(index) {
				return "jj_alert_btn_id" + index
			},
			close() {
				if (this.$el) {
          if (this.isQuickClose){
            this.quickClose()
            return
          }
					if (this.isCloseAlert) {
						return
					}
					this.isCloseAlert = true
				}

			},
      quickClose(){
        this.$emit('close')
        this.$el.remove()
      },
			animationend(){
				if(this.isCloseAlert){
					//弹窗消失结束后
					this.quickClose()
				}
			},
			update(alertData,message,btnTitle){
				let data = getData(alertData,message,btnTitle)
				Object.assign(this.$data,data)
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
				if (this.buttonDirection === 'column') {
					style['flex-direction'] = 'column'
					style['width'] = '100%'
					style['border-right'] = '0px'
				}
				return style
			},
			clickFn(e, btn) {
				//阻止事件冒泡
				e.stopPropagation()

				if (btn.isDisable === true) {
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
				if (btn.isDisable === true) {
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
	@import "../jj-fadelog.css";
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
  .sheet-box{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%
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

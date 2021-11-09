## 效果图
![image](https://github.com/04zhujunjie/jj-messagebox/blob/main/screenshot/jj-messagebox.gif)

## 目录 
* [安装](#安装)
* [引用](#引用)
* [alert使用](#alert使用)
* [dialog使用](#dialog使用)
* [popup使用](#popup使用)
* [loading使用](#loading使用)
* [toast使用](#toast使用)

### 安装
---
1、使用npm安装
```
npm i jj-messagebox --save
```
2、手动安装，下载该项目，将项目jj-messagebox文件夹（路径：src/jj-messagebox）拷贝到项目中，
引用jj-messagebox文件夹下的index.js文件

### 引用
-------

1、在main.js文件全局全部引入

```
/*
1、手动安装，需要指定文件
import messagebox from './jj-messagebox/index.js'
*/
//2、通过npm安装
import messagebox from "jj-messagebox"

//注册全部插件（alert,dialog,popup,loading,toast）
Vue.use(messagebox)
```
2、在main.js文件全局部分引入

```
//注意：部分导入的插件名字不能有错，它们分别是：jjAlert,jjLoading,jjToast,jjDialog,jjPopup
//下面是指定安装加载提示框插件
/*
1、手动安装，需要指定文件
import {jjLoading} from './jj-messagebox/index.js'
*/
//2、通过npm安装
import {jjLoading}  from "jj-messagebox"

//注册某个插件，如加载提示框
Vue.use(jjLoading)
```

3、非全局安装，在某个组件中引入（只支持jjDialog和jjPopup）
```
/*
1、手动安装，需要指定文件
import {jjDialog} from './jj-messagebox/index.js'
*/
//2、通过npm安装
import {jjDialog}  from "jj-messagebox"

export default {
    name: 'App',
    components: {
        jjDialog
    }
}
```

### alert使用
-------
1、使用默认alert
```
/*
   一共有三个参数，三个参数都是字符串String类型 
   第一参数是title标题，第二个参数是message内容
   第三个参数是按钮的标题
   第三个参数如果没有传值，默认是‘确定’
   如果只传一个参数，那么显示的内容就是参数内容，按钮文本取默认值：‘确定’
*/

this.$jj_alert('时间就像海绵里的水,\n只要愿挤总还是有的。')
或
this.$jj_alert('提示', '时间就像海绵里的水,\n只要愿挤总还是有的。', '知道了')
```
2、自定义alert，需要传入一个Objec对象
```
  this.$jj_alert({
          type: "alert", //弹窗的类型有alert和sheet
	  width: '70%', //设置弹窗的宽度
	  padding: '20px 30px', //设置内容的上下左右偏移
	  maskColor: "rgba(0, 0, 0, 0.6)", //遮罩层的背景颜色
	  touchClose: true, //点击背景图层，是否关闭弹框
	  showClose: true, //是否显示右上角的关闭按钮
          title: '提示', //标题
          titleStyle: {
		   'color': '#fb2408',
		   'font-size': '20px'
	           }, //标题的样式
	  message: '事实上确实是当我们失去的时候，才知道自己曾经拥有；但有没有注意到当有些东西来临的时候，我们已错过。', //内容
	  messageStyle: {
	  "justify-content": 'left',
	  "display": "flex",
	  "color": '#8a8a8a',
	  'text-align': 'left'
	   }, //内容的样式
           btns:[{
            title: "Cancel", //按钮文本
	    activeBackground: '#2A8AFF', //按钮激活背景色
	    activeColor: "#fff", //按钮激活的字体颜色
	    click: () => {
	      console.log("点击Cancel") 
	    }
       }]
  })
```
3、关闭alert
```
//有两种方式关闭
//1、使用全局方法关闭
this.$jj_alert({isClose:true})
//2、使用对象调用关闭方法
let alert = this.$jj_alert(alertData)
//关闭弹框
 alert.close()
```

#### 参数说明

|  参数  |  说明 |  类型 | 默认值 |
| ---------- | -----------| :-----------:| :-----------:|
| type   |有alert和sheet   | String   | 'alert' | 
| duration   |动画时间，单位s秒  | Number   | 0.25 | 
| radius   |弹框的圆角  | Number   | 5 | 
| isClose   |是否关闭弹框  | Boolean   | false |
| maskColor   | 遮罩层的背景颜色  | String   | 'rgba(0, 0, 0, 0.35) '|
| background   | 弹窗内容的背景  | String   | '#fff' |
| touchClose   | 点击遮罩层，是否关闭弹框  | Boolean   | false |
| showClose   | 是否显示右上角的关闭按钮  | Boolean   | false |
| closeStyle   | 右上方关闭按钮的样式  | Object   | {} |
| width   |弹框的宽度，可以是百分比或具体像素值 |  String | '80%'| 
| padding   |内容上下左右偏移 | String   | '20px' | 
| title   |标题 | String   | - | 
| titleStyle   |标题的样式 | Object   | {} | 
| message   |内容 | String   | - | 
| messageStyle   |内容的样式  | Object   | {}| 
| btns   | 按钮列表 | Array | [{title:"确认"}] |


#### button按钮的参数说明

|  参数  |  说明 | 类型 | 默认值 | 
| ---------- | -----------| :-----------:| :-----------:|
| title   | 按钮的文本   | String   |  -  |
| activeBackground |按钮激活的背景色   | String   |  -  | 
| activeColor   | 按钮激活的字体颜色   | String   |   - | 
| style   |按钮的文本样式   | Object   |  {}  |
| touchClose   |点击按钮，是否自动关闭弹框   | Boolean   |  true  | 
| isDisable   |是否禁用按钮   | Boolean   |  false  | 
| click   |按钮点击事件  | Function   |  -  | 



### dialog使用
-------
```
  <jj-dialog :visible="isShowDialog" :titleStyle="{'color':'red'}" title="提示" message="Dialog"
			@close="isShowDialog=false">
   <div> 自定Dialog内容</div>
   <div slot="footer">
   <button class="btn" style="margin-bottom: 10px;" @click="isShowDialog=true">确定</button>
   </div>
  </jj-dialog>
```

#### Props参数说明

|  参数  |  说明 |  类型 | 默认值 |
| ---------- | -----------| :-----------:| :-----------:|
| visible   |是否显示  | Boolean   | false | 
| duration   |动画时间，单位s秒  | Number   | 0.25 | 
| radius   |弹框的圆角  | Number   | 5 | 
| maskColor   | 遮罩层的背景颜色  | String   | 'rgba(0, 0, 0, 0.35) '|
| background   | 弹窗内容的背景  | String   | '#fff' |
| touchClose   | 点击遮罩层，是否关闭弹框  | Boolean   | false |
| showClose   | 是否显示右上角的关闭按钮  | Boolean   | true |
| closeStyle   | 右上方关闭按钮的样式  | Object   | {} |
| width   |弹框的宽度，可以是百分比或具体像素值 |  String | '80%'| 
| padding   |内容上下左右偏移 | String   | '20px' | 
| title   |标题 | String   | - | 
| titleStyle   |标题的样式 | Object   | {} | 
| message   |内容 | String   | - | 
| messageStyle   |内容的样式  | Object   | {}| 

#### Events

|  事件名  |  说明 |  回调参数 |
| ---------- | -----------| :-----------:|
| close   |右上角的关闭按钮事件  | - |

### popup使用
-------

```
<jj-popup :visible="isShowPopup" :background="background" @close="isShowPopup=false" :showClose="true"
			title="请选择" :touchClose="true">
 <div> 今天天气不错</div>
</jj-popup>
```

#### Props参数说明

|  参数  |  说明 |  类型 | 默认值 |
| ---------- | -----------| :-----------:| :-----------:|
| visible   |是否显示  | Boolean   | false | 
| duration   |动画时间，单位s秒  | Number   | 0.25 | 
| radius   |弹框的圆角  | Number   | 5 | 
| maskColor   | 遮罩层的背景颜色  | String   | 'rgba(0, 0, 0, 0.35) '|
| background   | 弹窗内容的背景  | String   | '#fff' |
| touchClose   | 点击遮罩层，是否关闭弹框  | Boolean   | false |
| showClose   | 是否显示右上角的关闭按钮  | Boolean   | true |
| closeStyle   | 右上方关闭按钮的样式  | Object   | {} |
| height   |弹框的高度，可以是百分比或具体像素值 |  String | '60%'| 
| padding   |内容上下左右偏移 | String   | '20px' | 
| title   |标题 | String   | - | 
| titleStyle   |标题的样式 | Object   | {} | 
| message   |内容 | String   | - | 
| messageStyle   |内容的样式  | Object   | {}| 

#### Events

|  事件名  |  说明 |  回调参数 |
| ---------- | -----------| :-----------:|
| close   |右上角的关闭按钮事件  | - |

### loading使用
-------
1、使用默认的loading
```
this.$jj_loading('加载中...')
let that = this
setTimeout(function() {
//关闭弹框
that.$jj_loading({isClose:true})
}, 2000)
```
2、自定义loading
```
const loadingData = {imageSize: {width: '32px',height: '32px'}, //设置图片的大小
		     userInteractionEnabled: true, //是否启用用户交互，默认是false,启用后，遮罩层下的图层事件允许点击
		     type: 'round', //设置加载框的类型，有default、round、taichi三种
		     //imageUrl:require('../assets/loading_custom.png'),//图片链接,如果设置图片链接，type类型失效
		     background:'#f24', //设置弹框内容的背景色
		     message:"自定义..."
		     }
let loading = this.$jj_loading(loadingData)
setTimeout(() => {
 //关闭弹框
loading.close()
}, 2000)
```
3、关闭loading
```
//有两种方式关闭

//1、使用全局方法关闭
this.$jj_loading({isClose:true})
//2、使用对象调用关闭方法
let loading = this.$jj_loading(loadingData)
//关闭弹框
 loading.close()
```
#### 参数说明

|  参数  |  说明 |  类型 | 默认值 |
| ---------- | -----------| :-----------:| :-----------:|
| type   |有default、round、taichi  | String   | 'default' | 
| duration   |图片旋转一周动画时间，单位s秒  | Number   | 1.5 | 
| radius   |弹框的圆角  | Number   | 5 | 
| isClose   |是否关闭弹框  | Boolean   | false |
| maskColor   | 遮罩层的背景颜色  | String   | 'transparent'|
| background   | 弹窗内容的背景  | String   | 'rgba(0, 0, 0, 0.8)' |
| userInteractionEnabled   | 遮罩层下的事件是否可以交互  | Boolean   | false |
| width   |弹框的宽度，可以是百分比或具体像素值 |  String | '85px'| 
| padding   |内容上下左右偏移 | String   | '15px 10px 10px 10px' | 
| imageUrl   |图片的链接地址 | String   | - | 
| imageSize   |图片的大小 | Object   | {width: '32px',height: '32px'} | 
| message   |内容 | String   | - | 
| messageStyle   |内容的样式  | Object   | {}| 

### toast使用
-------
1、使用默认的toast
```
/*
   一共有三个参数 第一参数是提示信息，
   第二个参数是提示的类型（success，fail，warn），
   第三个参数是显示的时长
*/

//只显示文本
this.$jj_toast("请求成功")
//显示文本和提示的类型
this.$jj_toast("成功",'success')
//显示文本和设置显示的时长
this.$jj_toast("提交成功",'',3)
```
2、自定义toast
```
const toastData = {message: "哈哈哈哈哈哈哈哈。。。",
		   duration: 3,
		   radius: 2,
		   background:'#f24',
		   maxWidth:'60%',
		   messageStyle:{'color': '#fe2',
				'text-align': 'center'
				}
		 }
this.$jj_toast(toastData)
```
3、关闭toast
```
this.$jj_toast({isClose:true})
```

#### 参数说明

|  参数  |  说明 |  类型 | 默认值 |
| ---------- | -----------| :-----------:| :-----------:|
| type   | 提示的类型（success，fail，warn）  | String   | - |
| duration   |显示的时长，单位s秒, 小于0时，不消失，需要手动关闭  | Number   | 2.5 | 
| radius   |弹框的圆角  | Number   | 5 | 
| isClose   |是否关闭弹框  | Boolean   | false |
| maskColor   | 遮罩层的背景颜色  | String   | 'transparent'|
| background   | 弹窗内容的背景  | String   | 'rgba(0, 0, 0, 0.8)' |
| maxWidth   |弹框的最大宽度，可以是百分比或具体像素值 |  String | '80%'| 
| minWidth   |弹框的最小宽度，可以是百分比或具体像素值 |  String | '85px'| 
| padding   |内容上下左右偏移 | String   | '12px' | 
| imageUrl   |图片的链接地址 | String   | - | 
| imageSize   |图片的大小 | Object   | {width: '32px',height: '32px'} | 
| message   |内容 | String   | - | 
| messageStyle   |内容的样式  | Object   | {}| 



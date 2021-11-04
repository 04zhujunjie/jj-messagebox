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
2、手动安装，下载该项目，将项目packages文件夹（路径：src/packages）拷贝到项目中，
引用packages文件夹下的index.js文件

### 引用
-------

1、在main.js文件全局全部引入

```
/*
1、手动安装，需要指定文件
import messagebox from './packages/index.js'
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
import {jjLoading} from './packages/index.js'
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
import {jjDialog} from './packages/index.js'
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
   一共有三个参数，三个参数都是字符串String类型 第一参数是title标题，第二个参数是message内容，第三个参数是按钮的标题
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
          type: type, //弹窗的类型有alert和sheet
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
3、data参数说明

|  参数  | 类型 | 默认值 |  说明 | 
| ---------- | -----------| -----------| -----------|
| type   | String   | 'alert'   | 有alert和sheet   |
| duration   | Number   | 0.25   | 动画时间，单位s秒  |
| radius   | Number   | 5   | 弹框的圆角  |
| maskColor   | String   | 'rgba(0, 0, 0, 0.35) '  | 遮罩层的背景颜色  |
| background   | String   | '#fff'   | 弹窗内容的背景  |
| touchClose   | Boolean   | false   | 点击遮罩层，是否关闭弹框  |
| showClose   | Boolean   | false   | 是否显示右上角的关闭按钮  |
| closeStyle   | Object   | {}   | 右上方关闭按钮的样式  |
| width   | String   | '80%'   | 内容显示框的大小，可以按照窗口的百分比指定大小，也可以是具体px,如300px |
| padding   | String   | '20px'   | 内容上下左右偏移 |
| title   | String   | ''   | 标题 |
| titleStyle   | Object   | {}   | 标题的样式 |
| message   | String   | ''   | 内容 |
| messageStyle   | Object   | {}   | 内容的样式  |
| btns   | Array   | [{title:"确认"}]   | 按钮列表 |


4、button按钮的参数说明

|  参数  | 类型 | 默认值 |  说明 | 
| ---------- | -----------| -----------| -----------|
| title   | String   |    | 按钮的文本   |
| activeBackground   | String   |    | 按钮激活的背景色   |
| activeColor   | String   |    | 按钮激活的字体颜色   |
| style   | Object   |  {}  |按钮的文本样式   |
| touchClose   | Boolean   |  true  | 点击按钮，是否自动关闭弹框   |
| isDisable   | Boolean   |  false  | 是否禁用按钮   |
| click   | Function   |    | 按钮点击事件  |



### dialog使用
-------


### popup使用
-------


### loading使用
-------

### toast使用
-------

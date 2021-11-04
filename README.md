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

### dialog使用
-------


### popup使用
-------


### loading使用
-------

### toast使用
-------

import jjDialog from "./dialog/index.js"
import jjAlert from "./alert/index.js"
import jjLoading from './loading/index.js'
import jjToast from './toast/index.js'
import jjPopup from './popup/index.js'


// 组件集合，用于遍历
const components = [jjDialog,jjPopup];

// console.log({
// 	components
// });
let messagebox = {}
// install 方法
messagebox.install = function(Vue) {
	if (messagebox.install.installed) return;
	messagebox.install.installed = true
	//使用JJAlert插件
	Vue.use(jjAlert)
	Vue.use(jjLoading)
	Vue.use(jjToast)
	// console.log('------------')
	// 遍历注册全局组件
	components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
	messagebox.install(window.Vue);
}

export {
	jjAlert,
	jjLoading,
	jjToast,
	jjDialog,
	jjPopup,
};

export default messagebox

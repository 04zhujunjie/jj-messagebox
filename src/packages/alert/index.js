import Vue from 'vue';
import Alert from './jj-alert.vue';
let JJAlert = Vue.extend(Alert); //创建vm实例的构造函数
JJAlert.install = function(data) {
	let instance = new JJAlert({
		data
	})
	/*
	定义一个installed变量，该变量为true，再将alert进行挂载，因为第一次触发该install函数，
	是Vue.prototype.$jj_alert = JJAlert.install赋值就触发，这个赋值操作不需要显示弹窗，所以installed变量来控制
	注意⚠️：每次调用this.$jj_alert都会触发该方法
	*/
	if (JJAlert.installed) {
		instance.$mount()
		document.body.appendChild(instance.$el)
	}
	JJAlert.installed = true
	return instance
}
Vue.prototype.$jj_alert = JJAlert.install
export default JJAlert


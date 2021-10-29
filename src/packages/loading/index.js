import Vue from 'vue';
import loading from './jj-loading.vue';
let jjLoading = Vue.extend(loading); //创建vm实例的构造函数
jjLoading.install = function(data) {
	let loadingElement = document.getElementById('jj-loading-id')
	if (loadingElement) {
		//移除已有的加载框
		loadingElement.remove()
	} 
	let instance = new jjLoading({
		data
	})
	/*
	定义一个installed变量，该变量为true，再将alert进行挂载，因为第一次触发该install函数，
	是Vue.prototype.$jj_alert = JJAlert.install赋值就触发，这个赋值操作不需要显示弹窗，所以installed变量来控制
	注意⚠️：每次调用this.$jj_alert都会触发该方法
	*/
	if (jjLoading.installed) {
		instance.$mount()
		document.body.appendChild(instance.$el)
	}
	jjLoading.installed = true
	return instance

}
Vue.prototype.$jj_loading = jjLoading.install
export default jjLoading
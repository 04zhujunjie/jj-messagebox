import Vue from 'vue';
import loading from './jj-loading.vue';
let jjLoading = Vue.extend(loading); //创建vm实例的构造函数

let jj_loading_close = function(){
	let loadingElement = document.getElementById('jj-loading-id')
	if (loadingElement) {
		//移除已有的加载框
		loadingElement.remove()
	} 
}

let jj_loading = function(loadingData){
	let data = {}
	if(loadingData === undefined || loadingData === null){
		return
	}else{
		if (loadingData.constructor === Object) {
			data = {
				...loadingData
			}
		}else{
			data = {
				"message": loadingData+'',
			}
		}
	}
	
	jj_loading_close()
	
	let instance = new jjLoading({
		data
	})
	/*
	定义一个installed变量，该变量为true，再将alert进行挂载，因为第一次触发该install函数，
	是Vue.prototype.$jj_loading = jjLoading.install赋值就触发，这个赋值操作不需要显示弹窗，所以installed变量来控制
	注意⚠️：每次调用this.$jj_loading都会触发该方法
	*/
	if (jjLoading.installed) {
		instance.$mount()
		document.body.appendChild(instance.$el)
	}
	jjLoading.installed = true
	return instance
}

jjLoading.install = function(data) {
	return jj_loading(data)
}
Vue.prototype.$jj_loading = jj_loading
Vue.prototype.$jj_loading_close = jj_loading_close
export default jjLoading

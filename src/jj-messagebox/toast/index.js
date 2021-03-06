import Vue from 'vue';
import toast from './jj-toast.vue';
let jjToast = Vue.extend(toast); //创建vm实例的构造函数

let getData = function(toastData,type,duration){
	let data = {}
	const isToastDataNull = (toastData === undefined || toastData === null)
	const isTypeNull = (type === undefined || type === null)
	const isDurationNull = (duration === undefined || duration === null)
	if(isToastDataNull&&isTypeNull&&isDurationNull){
		return {}
	}else{
		if (!isToastDataNull){
			if (toastData.constructor === Object) {
				data = {
					...toastData
				}
				return data
			}else{
				data['message'] = toastData+''
			}
		}
		
		if(!isTypeNull){
			data['type'] = type + ''
		}
		if(!isDurationNull){
			if (duration.constructor === Number){
				data["duration"] = duration
			}
		}
	}
	return data
}

let jj_toast_close = function(){
	let toastElement = document.getElementById('jj-toast-id')
	if (toastElement) {
		if (jjToast.jj_time) {
			clearTimeout(jjToast.jj_time)
		}
		//移除已有的加载框
		toastElement.remove()
	}
}

let jj_toast = function(toastData,type,duration) {
   
	let data = getData(toastData,type,duration)
    //移除已有的加载框
	jj_toast_close()
	let instance = new jjToast({
		data
	})
	/*
	定义一个installed变量，该变量为true，再将alert进行挂载，因为第一次触发该install函数，
	是Vue.prototype.$jj_toast = jjToast.install赋值就触发，这个赋值操作不需要显示弹窗，所以installed变量来控制
	注意⚠️：每次调用this.$jj_toast都会触发该方法
	*/
	if (jjToast.installed) {
		if (data.isClose === true || data.duration === 0){
			//移除已有的加载框
			jj_toast_close()
			return instance
		}
		instance.$mount()
		document.body.appendChild(instance.$el)
		if (data.duration > 0){
			jjToast.jj_time = setTimeout(function() {
				jjToast.jj_time = null
				instance.close()
			}, data.duration * 1000)
		}
	}
	jjToast.installed = true
	return instance
}
jjToast.install = function(data) {
	return jj_toast(data)
}



Vue.prototype.$jj_toast = jj_toast
export default jjToast

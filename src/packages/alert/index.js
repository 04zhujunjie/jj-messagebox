import Vue from 'vue';
import alert from './jj-alert.vue';
let jjAlert = Vue.extend(alert); //创建vm实例的构造函数

let jj_alert_close = function(){
	let alertElement = document.getElementById('jj-alert-id')
	if (alertElement) {
		//移除已有的alert框
		alertElement.remove()
	} 
}

let jj_alert = function(alertData,message,btnTitle) {
	const data = getData(alertData,message,btnTitle)
	//移除已有的弹框
	jj_alert_close()
	let instance = new jjAlert({
		data
	})
	/*
	定义一个installed变量，该变量为true，再将alert进行挂载，因为第一次触发该install函数，
	是Vue.prototype.$jj_alert = JJAlert.install赋值就触发，这个赋值操作不需要显示弹窗，所以installed变量来控制
	注意⚠️：每次调用this.$jj_alert都会触发该方法
	*/
	if (jjAlert.installed) {
		instance.$mount()
		document.body.appendChild(instance.$el)
	}
	jjAlert.installed = true
	return instance
	
}

let getData = function(alertData,message,btnTitle){
	let data = {}
	const isAlertDataNull = (alertData === undefined || alertData === null)
	const isMessageNull = (message === undefined || message === null)
	const isBtnTitileNull = (btnTitle === undefined || btnTitle === null)
	if(isAlertDataNull&&isMessageNull&&isBtnTitileNull){
		return
	}else{
		if (!isAlertDataNull){
			if (alertData.constructor === Object) {
				data = {
					...alertData
				}
				return data
			}else{
				data['title'] = alertData+''
			}
		}
		
		if(!isMessageNull){
			data['message'] = message + ''
		}
		if(!isBtnTitileNull){
			data['btns'] = [{
				'title':btnTitle
			}] 
		}
		
	}
	return data
}

jjAlert.install = function(data) {
    return jj_alert(data)
}
Vue.prototype.$jj_alert = jj_alert
Vue.prototype.$jj_alert_close = jj_alert_close
export default jjAlert


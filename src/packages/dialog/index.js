import dialog from "./jj-dialog.vue"

dialog.install = function(Vue){
	Vue.component(dialog.name,dialog)
}
export default dialog
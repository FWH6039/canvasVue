import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, Option, RadioGroup, RadioButton, Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem, Form, FormItem, Input, Notification, Tree, Collapse, CollapseItem } from 'element-ui';
import notice from './components/notice/index.js'
// import underscore from 'underscore';
Vue.config.productionTip = false
Vue.use(Button).use(Select).use(Option).use(Option).use(RadioGroup).use(Menu).use(RadioButton).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Breadcrumb).use(BreadcrumbItem).use(Form).use(FormItem).use(Input).use(Tree).use(Collapse).use(CollapseItem);
//挂载到原型上
Vue.prototype.$notify = Notification;
Vue.prototype.$notice = notice;

// Vue.use(Loading.directive);
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$message = Message;

// export default new Vue();
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
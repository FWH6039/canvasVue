import Vue from 'vue';
import Notice from './Notice.vue';
const NotifyContructor = Vue.extend(Notice);
export default function notice(optiobs) {
    //options为一个对象 title message  
    //实例化
    const instance = new NotifyContructor({
        data: optiobs,
    });
    //手动挂载
    instance.$mount(); //dom元素渲染完成
    //手动挂载到
    document.body.appendChild(instance.$el)

    return instance;
}
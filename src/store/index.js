import Vue from 'vue';
import Vuex from 'vuex';
import Module1 from './store1Model/index.js';
import Module2 from './store2Model/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        namespaced: true,
        module1: Module1,
        module2: Module2,
    }
})
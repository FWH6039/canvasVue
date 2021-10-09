export default {
    namespaced: true,
    state: {
        names: 50
    },
    getters: {},
    mutations: {
        setName(state, payload) {
            state.names += payload.num

        }
    },
    actions: {
        setNum({ commit, state }, payload) {
            commit('setName', { num: state.names + payload.num })
        }
    }
}
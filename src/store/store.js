import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0,
        adminleftnavnum: "1" //管理后台左侧导航
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
export default store;
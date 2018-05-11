import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// TYPES
const AUTH_KEY = 'AUTH_KEY'

// STATE
const state = {
    authKey: null
}

// MUTATIONS
const mutations = {
    [AUTH_KEY](state, obj) {
        state.authKey = obj.authKey
    }
}

// ACTIONS
const actions = ({
    setAuthKey({ commit }, obj) {
        commit(AUTH_KEY, obj)
    }
})

export default new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [createPersistedState({ storage: window.sessionStorage })]
});

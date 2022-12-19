import Vue from 'vue'
import Vuex from 'vuex'
import usersService from '@/services/users.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    async actionusersList({ commit }) {
      try {
        const data = await usersService.usersList()
        commit('SET_USERS', data.data)
      } catch {
        (error) => Promise.reject(error)
      }
    },
  },
  modules: {
  }
})

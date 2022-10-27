import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    decreaseCounter({ commit }) {
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1').then(res => commit('decreaseCounter', res.data[0]))
    },
    increaseCounter({ commit }) {
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1').then(res => {
        commit('increaseCounter', res.data[0])
      })
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    }
  },
  modules: {
  }
})

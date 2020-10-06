import Vue from 'vue'
import Vuex from 'vuex'
import { characterInfo, characterAll } from "../../service/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characterInfo: {},
    charactersList: []
  },
  mutations: {
    setCharactersList:(state, payload) => (state.charactersList = payload),
    setCharacterInfo:(state, payload) => (state.characterInfo = payload)
  },
  actions: {
    async getCharactersList({commit}) {
      try {
        const response = await characterAll()
        const list = response.data.results
        commit("setCharactersList", list)
        console.log('all',response.data);
      } catch (error) {
        console.log(error.response);
      }
    },

    async getCharactersDimension({ commit }, idCharacter) {
      try {
        const response = await characterInfo(idCharacter)
        console.log('response', response);
      } catch (error) {
        console.log(error.response);
      }
    }
  },

  getters: {
    gtrCharacters(state) {
      return state.charactersList
    }
  }
})

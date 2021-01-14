import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    landing: 'custom',
    firstLanding: false,
    productDocument:null,

  },
  mutations: {

    setProductDocument(state,productDocument) {
      state.productDocument = productDocument;
    },

    loadLanding(state,landing) {
      state.landing = landing;
    },

    loadFirstLanding(state) {

      if (!state.firstLanding) {
        state.firstLanding = true;
      }

    }

  },
  actions: {
  },
  modules: {
  }
})

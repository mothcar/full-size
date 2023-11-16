import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    main_page: null,
    main_path: null,
    sub_page: null,
  },

  getters: {
    getMainPage: state => {
      console.log('getMainPage  main_page : ', state.main_page);
      return state.main_page;
    },
    getMainPath: state => {
      console.log('getMainPage  main_path : ', state.main_path);
      return state.main_path;
    },
    getSubPage: state => {
      console.log('getSubPage  sub_page : ', state.sub_page);
      return state.sub_page;
    },
  },
  mutations: {
    setMainPage(state, payload) {
      console.log('setMainPage  main_page : ', payload.main_page);
      state.main_page = payload.main_page;
    },
    setMainPath(state, payload) {
      console.log('setMainPage  main_path : ', payload.main_path);
      state.main_path = payload.main_path;
    },
    setSubPage(state, payload) {
      console.log('setSubPage  sub_page : ', payload.sub_page);
      state.sub_page = payload.sub_page;
    },
  },

  actions: {
  },
  modules: {
  },
  
  plugins: [
      createPersistedState()
  ]
})

import { createStore } from 'vuex';

export default createStore({
  state: {
    suzdalenko: {}
  },
  mutations: {
    situate(state) {
      state.suzdalenko.listItems = [];
      state.suzdalenko.listThemesGlobal = [];
    },
    situateSearchValue(state, payload) {
      state.suzdalenko.searchValue = payload.searchValue;
    },
    pushGlobalListThemes(state, payload) {
      state.suzdalenko.listThemesGlobal = payload.listThemes;
    }
  },
  actions: {
  },
  modules: {
  }
});

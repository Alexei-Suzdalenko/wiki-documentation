import { createStore } from 'vuex';

export default createStore({
  state: {
    suzdalenko: {}
  },
  mutations: {
    situate(state) {
      state.suzdalenko.listItems = [];
      state.suzdalenko.listThemesGlobal = [];
      state.suzdalenko.currentTheme = {};
    },
    situateSearchValue(state, payload) {
      state.suzdalenko.searchValue = payload.searchValue;
    },
    pushGlobalListThemes(state, payload) {
      state.suzdalenko.listThemesGlobal = payload.listThemes;
    },
    pushCurrentGlobalTheme(state, payload) {
      state.suzdalenko.currentTheme = payload;
    }
  },
  actions: {},
  modules: {}
});

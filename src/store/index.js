import { createStore } from 'vuex';

export default createStore({
  state: {
    suzdalenko: {}
  },
  mutations: {
    situate(state) {
      state.suzdalenko.listItems = [];
    },
    situateSearchValue(state, payload) {
      state.suzdalenko.searchValue = payload.searchValue;
    }
  },
  actions: {
  },
  modules: {
  }
});

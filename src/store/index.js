import { createStore } from 'vuex';

export default createStore({
  state: {
    suzdalenko: {}, css_class: {}
  },
  mutations: {
    situate(state) {
      state.suzdalenko.listItems = [];
      state.suzdalenko.listThemesGlobal = [];
      state.suzdalenko.currentTheme = {};
      state.css_class.ul_class = 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled';
    },
    situateSearchValue(state, payload) { state.suzdalenko.searchValue = payload.searchValue; },
    pushGlobalListThemes(state, payload) { state.suzdalenko.listThemesGlobal = payload.listThemes; },
    pushCurrentGlobalTheme(state, payload) { state.suzdalenko.currentTheme = payload; },

    // navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled
    openCloseMenuNow(state){
      if(state.css_class.ul_class == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'){
        state.css_class.ul_class = 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'; return; }
      if(state.css_class.ul_class == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'){
        state.css_class.ul_class = 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'; return; }
    }

  }
});

const appbarModule = {
  namespaced: true,
  state() {
    return {
      showSideBar: false,
      opacity: 0,
    };
  },
  mutations: {
    setShowSideBar(state, showSideBar) {
      state.showSideBar = showSideBar;
    },
    setOpacity(state, opacity) {
      state.opacity = opacity;
    },
  },
};

export { appbarModule };

const scrollModule = {
  namespaced: true,
  state() {
    return {
      body: null,
    };
  },
  mutations: {
    setBody(state, body) {
      state.body = body;
    },
  },
};

export { scrollModule };

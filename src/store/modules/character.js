const characterModule = {
  namespaced: true,
  state() {
    return {
      characters: [],
      page: 1,
      numPages: 2,
      search: '',
    };
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setPage(state, page) {
      state.page = page;
    },
    setNumPages(state, numPages) {
      state.numPages = numPages;
    },
    setSearch(state, search) {
      state.search = search;
    },
  },
};

export { characterModule };

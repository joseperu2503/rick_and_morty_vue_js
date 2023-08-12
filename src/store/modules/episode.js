const episodeModule = {
  namespaced: true,
  state() {
    return {
      episodes: [],
      page: 1,
      numPages: 2,
      search: '',
    };
  },
  mutations: {
    setEpisodes(state, episodes) {
      state.episodes = episodes;
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

export { episodeModule };

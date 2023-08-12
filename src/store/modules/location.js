const locationModule = {
  namespaced: true,
  state() {
    return {
      locations: [],
      page: 1,
      numPages: 2,
      search: '',
    };
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
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

export { locationModule };

import { mapState, mapMutations } from 'vuex';
import { scrollMixin } from '@/mixins/scrollMixin';

export const locationsMixin = {
  data() {
    return {
      loadMore: false,
    };
  },
  mixins: [scrollMixin('loadMoreLocations')],
  computed: {
    ...mapState('location', ['locations', 'page', 'numPages', 'search']),
  },
  created() {
    if (this.search != '') {
      this.setSearch('');
      this.setPage(1);
      this.setLocations([]);
    }
    if (this.locations.length == 0) {
      this.getAllLocations();
    }
  },
  watch: {
    search() {
      this.setPage(1);
      this.getAllLocations();
    },
  },
  methods: {
    ...mapMutations('location', [
      'setLocations',
      'setPage',
      'setNumPages',
      'setSearch',
    ]),
    getAllLocations() {
      this.loadMore = false;
      let currentSearch = this.search;
      this.$http
        .get(`location?page=${this.page}&name=${currentSearch}`)
        .then((response) => {
          if (this.search == currentSearch) {
            if (this.page == 1) {
              this.setLocations([]);
            }
            this.setLocations([...this.locations, ...response.data.results]);
            this.setNumPages(response.data.info.pages);
            this.setPage(this.page + 1);
            this.loadMore = true;
          }
        })
        .catch((error) => {
          console.log(error);
          if (this.search == currentSearch) {
            this.setLocations([]);
          }
        });
    },
    loadMoreLocations() {
      if (this.page <= this.numPages && this.loadMore) {
        this.getAllLocations();
      }
    },
  },
};

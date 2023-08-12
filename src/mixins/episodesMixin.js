import { mapState, mapMutations } from 'vuex';
import { scrollMixin } from '@/mixins/scrollMixin';

export const episodesMixin = {
  data() {
    return {
      loadMore: false,
    };
  },
  mixins: [scrollMixin('loadMoreEpisodes')],
  computed: {
    ...mapState('episode', ['episodes', 'page', 'numPages', 'search']),
  },
  created() {
    if (this.search != '') {
      this.setSearch('');
      this.setPage(1);
      this.setEpisodes([]);
    }
    if (this.episodes.length == 0) {
      this.getAllEpisodes();
    }
  },
  watch: {
    search() {
      this.setPage(1);
      this.getAllEpisodes();
    },
  },
  methods: {
    ...mapMutations('episode', [
      'setEpisodes',
      'setPage',
      'setNumPages',
      'setSearch',
    ]),
    getAllEpisodes() {
      this.loadMore = false;
      let currentSearch = this.search;
      this.$http
        .get(`episode?page=${this.page}&name=${currentSearch}`)
        .then((response) => {
          if (this.search == currentSearch) {
            if (this.page == 1) {
              this.setEpisodes([]);
            }
            this.setEpisodes([...this.episodes, ...response.data.results]);
            this.setNumPages(response.data.info.pages);
            this.setPage(this.page + 1);
            this.loadMore = true;
          }
        })
        .catch((error) => {
          console.log(error);
          if (this.search == currentSearch) {
            this.setEpisodes([]);
          }
        });
    },
    loadMoreEpisodes() {
      if (this.page <= this.numPages && this.loadMore) {
        this.getAllEpisodes();
      }
    },
  },
};

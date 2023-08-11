import { mapState, mapMutations } from 'vuex';
import { scrollMixin } from '@/mixins/scrollMixin';

export const charactersMixin = {
  data() {
    return {
      loadMore: false,
    };
  },
  mixins: [scrollMixin('loadMoreCharacters')],
  computed: {
    ...mapState('character', ['characters', 'page', 'numPages', 'search']),
  },
  created() {
    if (this.search != '') {
      this.setSearch('');
      this.setPage(1);
      this.setCharacters([]);
    }
    if (this.characters.length == 0) {
      this.getAllCharacters();
    }
  },
  watch: {
    search() {
      this.setPage(1);
      this.getAllCharacters();
    },
  },
  methods: {
    ...mapMutations('character', [
      'setCharacters',
      'setPage',
      'setNumPages',
      'setSearch',
    ]),
    getAllCharacters() {
      this.loadMore = false;
      let currentSearch = this.search;
      this.$http
        .get(`character?page=${this.page}&name=${currentSearch}`)
        .then((response) => {
          if (this.search == currentSearch) {
            if (this.page == 1) {
              this.setCharacters([]);
            }
            this.setCharacters([...this.characters, ...response.data.results]);
            this.setNumPages(response.data.info.pages);
            this.setPage(this.page + 1);
            this.loadMore = true;
          }
        })
        .catch((error) => {
          console.log(error);
          if (this.search == currentSearch) {
            this.setCharacters([]);
          }
        });
    },
    loadMoreCharacters() {
      if (this.page <= this.numPages && this.loadMore) {
        this.getAllCharacters();
      }
    },
  },
};

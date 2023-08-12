import { scrollMixin } from '@/mixins/scrollMixin';
import { someCharactersMixin } from '@/mixins/someCharactersMixin';

export const episodeMixin = {
  data() {
    return {
      episode: {},
      showEpisode: false,
    };
  },
  mixins: [scrollMixin(), someCharactersMixin],
  methods: {
    getLocation(episodeId) {
      this.$http
        .get(`episode/${episodeId}`)
        .then((response) => {
          this.episode = response.data;
          this.showEpisode = true;

          let charactersId = [];

          this.episode.characters.map((url) => {
            const parts = url.split('/');
            const id = parts[parts.length - 1];
            charactersId.push(id);
          });

          if (charactersId.length > 0) {
            let someCharacters = charactersId.join(',');
            this.getSomeCharacters(someCharacters);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

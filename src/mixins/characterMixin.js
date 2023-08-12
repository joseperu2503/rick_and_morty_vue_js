import { scrollMixin } from '@/mixins/scrollMixin';
import { someEpisodesMixin } from '@/mixins/someEpisodesMixin';

export const characterMixin = {
  data() {
    return {
      character: {},
      showCharacter: false,
    };
  },
  mixins: [scrollMixin(), someEpisodesMixin],
  methods: {
    getCharacter(characterId) {
      this.$http
        .get(`character/${characterId}`)
        .then((response) => {
          this.character = response.data;
          this.showCharacter = true;

          let episodesId = [];

          this.character.episode.map((url) => {
            const parts = url.split('/');
            const id = parts[parts.length - 1];
            episodesId.push(id);
          });

          if (episodesId.length > 0) {
            let someEpisodes = episodesId.join(',');
            this.getSomeEpisodes(someEpisodes);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

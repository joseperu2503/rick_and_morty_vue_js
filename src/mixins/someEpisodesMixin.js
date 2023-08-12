export const someEpisodesMixin = {
  data() {
    return {
      episodes: [],
    };
  },
  methods: {
    getSomeEpisodes(someEpisodes) {
      this.$http
        .get(`episode/${someEpisodes}`)
        .then((response) => {
          if (Array.isArray(response.data)) {
            this.episodes = response.data;
          } else {
            this.episodes = [response.data];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

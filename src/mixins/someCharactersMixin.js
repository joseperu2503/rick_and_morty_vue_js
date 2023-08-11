export const someCharactersMixin = {
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    getSomeCharacters(someCharacters) {
      this.$http
        .get(`character/${someCharacters}`)
        .then((response) => {
          if (Array.isArray(response.data)) {
            this.characters = response.data;
          } else {
            this.characters = [response.data];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

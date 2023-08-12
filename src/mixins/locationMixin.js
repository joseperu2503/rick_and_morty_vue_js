import { scrollMixin } from '@/mixins/scrollMixin';
import { someCharactersMixin } from '@/mixins/someCharactersMixin';

export const locationMixin = {
  data() {
    return {
      location: {},
      showLocation: false,
    };
  },
  mixins: [scrollMixin(), someCharactersMixin],
  methods: {
    getLocation(locationId) {
      this.$http
        .get(`location/${locationId}`)
        .then((response) => {
          this.location = response.data;
          this.showLocation = true;

          let residentsId = [];

          this.location.residents.map((url) => {
            const parts = url.split('/');
            const id = parts[parts.length - 1];
            residentsId.push(id);
          });

          if (residentsId.length > 0) {
            let someCharacters = residentsId.join(',');
            this.getSomeCharacters(someCharacters);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

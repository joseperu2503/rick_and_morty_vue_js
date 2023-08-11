import { mapMutations } from 'vuex';

export const scrollBodyMixin = {
  methods: {
    ...mapMutations('scroll', ['setBody']),
  },
  mounted() {
    this.setBody(document.getElementById('body'));
  },
};

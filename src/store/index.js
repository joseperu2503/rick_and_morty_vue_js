import { createStore } from 'vuex';
import { characterModule } from '@/store/modules/character';
import { locationModule } from '@/store/modules/location';
import { episodeModule } from '@/store/modules/episode';
import { scrollModule } from '@/store/modules/scroll';
import { appbarModule } from '@/store/modules/appbar';

const store = createStore({
  state() {
    return {
      status: null,
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    character: characterModule,
    location: locationModule,
    episode: episodeModule,
    scroll: scrollModule,
    appbar: appbarModule,
  },
});

export default store;

import { createStore } from 'vuex';
import { characterModule } from '@/store/modules/character';
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
    scroll: scrollModule,
    appbar: appbarModule,
  },
});

export default store;

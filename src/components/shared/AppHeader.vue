<template>
  <div class="fixed top-0 right-0 left-0 z-10">
    <div class="h-16 w-full bg-gradient-to-b from-black fixed z-20 top-0 px-8 flex items-center justify-between">
      <div>
        <img src="@/assets/logo.png" class="h-10 cursor-pointer" @click="goHome" />
      </div>
      <i class="fas fa-bars text-white text-2xl sm:hidden" @click="toggleSidebar"></i>
      <nav class="hidden text-white text-md sm:flex gap-4 md:gap-8">
        <router-link active-class="active" to="/" class="neon">Home</router-link>
        <router-link active-class="active" to="/characters" class="neon">Characters</router-link>
        <router-link active-class="active" to="/locations" class="neon">Locations</router-link>
        <router-link active-class="active" to="/episodes" class="neon">Episodes</router-link>
      </nav>
    </div>
    <div class="bg-black w-full h-16 fixed top-0 z-10" :style="`opacity: ${opacity};`"></div>
    <div class="fixed top-0 right-0 left-0 bottom-0 bg-black/70 z-10 backdrop-blur-sm transition-all"
      :class="[showSideBar ? 'translate-x-0' : 'translate-x-full']">
      <div class="flex h-full flex-col items-center justify-center text-white text-xl sm:flex gap-4">
        <router-link active-class="active" to="/" class="neon">Home</router-link>
        <router-link active-class="active" to="/characters" class="neon">Characters</router-link>
        <router-link active-class="active" to="/locations" class="neon">Locations</router-link>
        <router-link active-class="active" to="/episodes" class="neon" @click="toggleSidebar">Episodes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('appbar', ['showSideBar', 'opacity']),
    ...mapState('scroll', ['body']),
  },
  mounted() {
    this.scroll();
    this.body?.addEventListener("scroll", this.scroll);
  },
  beforeUnmount() {
    this.body?.removeEventListener("scroll", this.scroll);
  },
  methods: {
    ...mapMutations('appbar', [
      'setShowSideBar',
      'setOpacity',
    ]),
    scroll() {
      let scroll = this.body?.scrollTop;
      if (scroll != undefined && scroll <= 180) {
        this.setOpacity(scroll / 180);
      } else {
        this.setOpacity(1);
      }
    },
    toggleSidebar() {
      this.setShowSideBar(!this.showSideBar);
    },
    goHome() {
      this.$router.push("/");
    }
  },
}
</script>
<style scoped></style>

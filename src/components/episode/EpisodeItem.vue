<template>
  <div @click="goEpisode"
    class="backdrop-blur-sm bg-black/60 hover:bg-black/30 shadow-sm shadow-rick-green-1 rounded-lg py-4 px-4 flex flex-col justify-between transition-all cursor-pointer">
    <div class="text-white flex justify-end mb-4">
      {{ episode.episode }}
    </div>
    <div class="text-white text-base sm:text-lg md:text-xl line-clamp-1">
      {{ episode.name }}
    </div>

  </div>
</template>
<script>
export default {
  props: ['episode'],
  methods: {
    goEpisode() {
      this.$router.push({
        name: "episode",
        params: { episodeId: this.episode.id },
      });
    }
  }
}
</script>

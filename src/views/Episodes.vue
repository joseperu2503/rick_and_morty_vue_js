<template>
  <div class="max-w-5xl mx-auto">
    <InputSearch :value="search" @input="setSearch($event)" />
    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <EpisodeItem v-for="item in episodes" :key="item.id" :episode="item" />
    </div>
    <div v-if="episodes.length == 0 && search != ''"
      class="text-rick-white  flex items-center justify-center text-lg font-semibold py-10">
      No results found.</div>
  </div>
</template>
<script>
import EpisodeItem from "@/components/episode/EpisodeItem.vue";
import { episodesMixin } from "@/mixins/episodesMixin";
import InputSearch from "@/components/shared/InputSearch.vue";

export default {
  mixins: [episodesMixin],
  components: { EpisodeItem, InputSearch }
}
</script>
<style scoped></style>

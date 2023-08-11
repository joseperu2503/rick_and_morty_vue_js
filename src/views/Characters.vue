<template>
  <div class="max-w-5xl mx-auto">
    <InputSearch :value="search" @input="setSearch($event)"/>
    <div class="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mx-auto">
      <CharacterItem v-for="item in characters" :key="item.id" :character="item" />
    </div>
    <div v-if="characters.length == 0 && search != ''"
      class="text-rick-white  flex items-center justify-center text-lg font-semibold py-10">
      No results found.</div>
  </div>
</template>

<script>
import CharacterItem from "@/components/character/CharacterItem.vue";
import { charactersMixin } from "@/mixins/charactersMixin";
import InputSearch from "@/components/shared/InputSearch.vue";

export default {
  mixins: [charactersMixin],
  components: { CharacterItem, InputSearch }
}
</script>

<style scoped></style>

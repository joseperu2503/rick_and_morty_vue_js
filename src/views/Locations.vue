<template>
  <div class="max-w-5xl mx-auto">
    <InputSearch :value="search" @input="setSearch($event)" />
    <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <LocationItem v-for="item in locations" :key="item.id" :location="item" />
    </div>
    <div v-if="locations.length == 0 && search != ''"
      class="text-rick-white  flex items-center justify-center text-lg font-semibold py-10">
      No results found.</div>
  </div>
</template>
<script>
import LocationItem from "@/components/location/LocationItem.vue";
import { locationsMixin } from "@/mixins/locationsMixin";
import InputSearch from "@/components/shared/InputSearch.vue";

export default {
  mixins: [locationsMixin],
  components: { LocationItem, InputSearch }
}
</script>

<style scoped></style>

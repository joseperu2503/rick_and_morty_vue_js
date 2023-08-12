<template>
  <div
    class="backdrop-blur-sm bg-black/60 hover:bg-black/30 shadow-sm shadow-rick-2 rounded-lg py-4 px-4 flex flex-col justify-between transition-all cursor-pointer"
    @click="goLocation()">
    <div class="text-white text-base sm:text-lg md:text-xl lg:text-2xl">
      {{ location.name }}
    </div>
    <div class="flex mt-10 gap-4 items-center justify-start">
      <div class="bg-rick-3 px-2 py-1 rounded-md text-sky-900 text-xs font-semibold">
        {{ location.dimension }}
      </div>
      <div class="bg-rick-green-2 px-2 py-1 rounded-md text-rick-white text-xs font-semibold">
        {{ location.type }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['location'],
  methods: {
    goLocation() {
      this.$router.push({
        name: "location",
        params: { locationId: this.location.id },
      });
    }
  }
}
</script>

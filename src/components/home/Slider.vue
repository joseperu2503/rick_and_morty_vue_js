<template>
  <div class="flex gap-3 max-w-7xl mx-auto justify-center h-1/3 md:h-1/2">
    <div v-for="(item, i) in characters" :key="item.id" class="transition-all w-1/12 relative cursor-pointer"
      :class="{ 'w-5/12': i == selected }" @click="goCharacter(item, i)">
      <img :src="item.image" class="h-full w-full object-cover rounded-3xl transition-all" />
      <div v-if="i == selected"
        class="absolute from-black h-1/3 w-full bottom-0 bg-gradient-to-t flex items-end px-4 pb-4 rounded-b-3xl overflow-x-hidden">
        <div class="w-min sm:min-w-max text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-white leading-none">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: this.getRandomInt(4),
    }
  },
  props: ['characters'],
  methods: {
    enter() {
      this.$router.push({ name: "characters" });
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    selectImg(index) {
      this.selected = index;
    },
    goCharacter(character, index) {
      if (index == this.selected) {
        this.$router.push({
          name: "character",
          params: { characterId: character.id },
        })
      } else {
        this.selectImg(index)
      }
    }
  }
}
</script>

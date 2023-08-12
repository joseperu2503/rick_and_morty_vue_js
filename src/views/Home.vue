<template>
  <div class="fixed top-0 right-0 left-0 bottom-0 overflow-auto">
    <div class="min-h-[400px] h-full flex flex-col justify-center pt-10">
      <Slider :characters="characters" />

      <div class="flex flex-col items-center justify-center mt-16">
        <div class="h-10 flex items-end">
          <div class="text-rick-white text-3xl font-semibold active cursor-pointer flex overflow-hidden justify-center"
            @click="enter" :class="[showPortal ? 'neon' : 'opacity-0']">
            <p class="hover:scale-105 transition-all">Enter</p>
          </div>

        </div>
        <div class="h-8">
          <img src="@/assets/portal-rick-and-morty.gif" alt="" class="transition-all duration-300"
            :class="[showPortal ? 'h-8 w-40' : 'h-0 w-0']">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "@/components/home/Slider.vue";
import { someCharactersMixin } from "@/mixins/someCharactersMixin";

export default {
  mixins: [someCharactersMixin],
  data() {
    return {
      showPortal: false,
      characters: []
    }
  },
  components: { Slider },
  created() {
    this.getSomeCharacters("1,2,3,4,5")
    setTimeout(() => {
      this.showPortal = true
    }, 300);
  }, methods: {
    enter() {
      this.$router.push({ name: "characters" });
    }
  }
}
</script>
<style scoped>
.neon {
  animation: enterAnimation 1s ease-in-out forwards;
}

@keyframes enterAnimation {

  /* 0% es el estado inicial de la animación */
  0% {
    transform: translateY(36px);
    height: 0;
    opacity: 0;
    width: 0;
  }

  /* 100% es el estado final de la animación */
  100% {
    transform: translateY(-16px);
    height: 40px;
    opacity: 1;
    width: 200px;
  }
}
</style>

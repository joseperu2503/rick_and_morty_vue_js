<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 overflow-y-auto px-4 sm:px-8 fondo z-0" id="body">

    <AppHeader />
    <div class="pt-32 md:pt-40 pb-16 md:pb-36">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
import { scrollBodyMixin } from '@/mixins/scrollBodyMixin';
import { defineAsyncComponent } from "vue";

const AppHeader = defineAsyncComponent(() => import("@/components/shared/AppHeader.vue"))

export default {
  mixins: [scrollBodyMixin],
  components: { AppHeader }
}
</script>

<style scoped>
.fondo {
  background: url("@/assets/fondo2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.fade-enter-active {
  animation: coming 0.2s;
  animation-delay: 0.1s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.2s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>

<template>
  <div class="border-b border-rick-green-1 flex max-w-3xl mx-auto">
    <div class=" pr-2 py-2 ">
      <i class="fas fa-search text-rick-green-1"></i>
    </div>
    <input type="text" class="flex-1 bg-transparent px-2 text-rick-white outline-none" :value="currentValue"
      @input="onInput" placeholder="Search" @keydown.enter="onEnter" ref="input" />

  </div>
</template>
<script>
export default {
  props: ['value', 'modelValue'],
  emits: ['update:modelValue', 'input'],
  computed: {
    currentValue() {
      return this.modelValue !== undefined ? this.modelValue : this.value;
    }
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target?.value);
      this.$emit("input", event.target?.value);
    },
    onEnter() {
      this.$refs.input.value?.blur()
    }
  }
}
</script>

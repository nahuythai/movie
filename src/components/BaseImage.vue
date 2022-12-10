<template>
  <img
    v-bind="$attrs"
    v-show="imgLoaded"
    class="bg-gray-500 min-h-[400px] rounded-lg mb-6"
    @load="imgLoaded = true"
  />
  <div
    class="bg-gray-500 animate-pulse min-h-[400px] rounded-lg mb-6"
    v-if="!imgLoaded"
  />
</template>

<script setup>
import { ref } from "vue";
const imgLoaded = ref(false);
</script>

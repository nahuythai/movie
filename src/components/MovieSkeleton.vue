<template>
  <div
    class="pb-4 bg-[#20283e]/80 px-2 pt-2 rounded-lg w-full hover:shadow-xl hover:shadow-accent cursor-not-allowed"
    v-for="i in quantity"
    :key="i"
  >
    <div class="bg-gray-500 animate-pulse min-h-[400px] rounded-lg mb-6" />
    <div class="h-5 bg-gray-500 animate-pulse rounded-lg w-2/3"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  quantity: Number,
});
</script>

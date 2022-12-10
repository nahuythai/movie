<template>
  <div class="text-white text-right space-x-4 font-medium">
    <button
      class="px-5 py-3 bg-black/20 rounded-lg text-gray-600"
      @click="movieStore.decreasePage"
    >
      Prev
    </button>
    <span class="font-bold">{{ movieStore.page }}</span>
    <button
      class="px-5 py-3 bg-black/30 rounded-lg"
      @click="movieStore.increasePage"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { useMovies } from "../stores/useMovies";

const movieStore = useMovies();
</script>

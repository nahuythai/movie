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
watch(
  () => movieStore.page,
  () => {
    router.push({ name: "Home", query: { page: movieStore.page } });
    movieStore.getMovies();
    window.scrollTo({ top: 400, behavior: "smooth" });
  }
);
</script>

<template>
  <div class="grid grid-cols-4 gap-6">
    <base-card v-for="movie in moviesStore.movies" :key="movie">
      <base-image :src="baseImageUrl + movie.poster_path"></base-image>
      <template #title>{{
        movie.original_title || movie.original_name
      }}</template>
    </base-card>

    <movie-skeleton
      :quantity="20"
      v-if="moviesStore.movies.length == 0"
    ></movie-skeleton>
  </div>
</template>
<script setup>
import BaseCard from "./BaseCard.vue";
import BaseImage from "./BaseImage.vue";
import MovieSkeleton from "./MovieSkeleton.vue";
import { useMovies } from "../stores/useMovies";
import { useRouter, useRoute } from "vue-router";
import { watch } from "vue";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";
const moviesStore = useMovies();
const router = useRouter();
const route = useRoute();
const movieStore = useMovies();
movieStore.setPage(route.query.page ?? 1);
movieStore.getMovies();
watch(
  () => movieStore.page,
  () => {
    router.push({ name: "Home", query: { page: movieStore.page } });
    movieStore.getMovies();
    window.scrollTo({ top: 400, behavior: "smooth" });
  }
);
</script>

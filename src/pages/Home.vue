<template>
  <div class="max-w-[640px] mb-[88px]">
    <h1 class="text-gray-200 text-6xl font-semibold mb-6">
      Search and Explore Movies or TV Series
    </h1>
    <p class="text-gray-500 mb-6">
      You can search for a movie by name and switch between categories,
      <span class="text-accent">don't forget to click the search button.</span>
    </p>
    <search-form></search-form>
  </div>
  <div class="flex bg-black/30 py-2 px-2 rounded-lg w-max space-x-2 mb-10">
    <base-tab
      v-for="tab in tabs"
      :key="tab"
      :tab="tab"
      :active-tab="activeTab"
      @active="activeTab = tab"
    ></base-tab>
  </div>
  <movie-view class="mb-8"></movie-view>
  <app-pagination></app-pagination>
</template>
<script setup>
import { useNotification } from "../composables/useNotification";
import SearchForm from "../components/SearchForm.vue";
import BaseTab from "../components/BaseTab.vue";
import MovieView from "../components/MovieVue.vue";
import AppPagination from "../components/AppPagination.vue";
import { ref } from "vue";
const { setMessage } = useNotification();

const tabs = ["All", "Movies", "TV Series"];
const activeTab = ref(tabs[0]);
</script>

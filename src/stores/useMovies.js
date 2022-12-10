// stores/counter.js
import { defineStore } from "pinia";
import { useAxios } from "../composables/useAxios";

export const useMovies = defineStore("counter", {
  state: () => {
    return { movies: [], page: 1 };
  },
  actions: {
    async getMovies() {
      console.log("get movies");
      const res = await useAxios(
        `https://api.themoviedb.org/3/trending/all/day?page=${this.page}&api_key=5c246f4640d5a5836fe8dbaaa089652d`,
        "GET"
      );
      this.movies = res.data.results;
    },
    increasePage() {
      this.page++;
    },
    decreasePage() {
      this.page--;
    },
    setPage(page) {
      this.page = page;
    },
  },
});

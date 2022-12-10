<template>
  <the-header v-if="isLoggedIn"></the-header>
  <button
    class="p-4 bg-gray-700/30 rounded-xl fixed bottom-72 right-48"
    @click="handleScroll"
    v-if="showArrowUp"
  >
    <base-icon name="arrow-up"></base-icon>
  </button>
  <main>
    <div class="container">
      <base-notification></base-notification>
      <section class="py-40">
        <router-view></router-view>
      </section>
    </div>
  </main>
</template>

<script setup>
import BaseNotification from "./components/BaseNotification.vue";
import BaseIcon from "./components/BaseIcon.vue";
import TheHeader from "./components/TheHeader.vue";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
import { ref } from "vue";

const isLoggedIn = ref(false);
const showArrowUp = ref(false);
onAuthStateChanged(auth, (user) => {
  isLoggedIn.value = !!user;
});

window.addEventListener("scroll", () => {
  showArrowUp.value = window.scrollY > 1000;
});

const handleScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

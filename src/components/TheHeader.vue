<template>
  <header class="py-5 fixed top-0 w-full bg-[#121829] z-50 shadow-sm">
    <div class="flex container items-center justify-between">
      <TheLogo></TheLogo>
      <the-logout></the-logout>
    </div>
  </header>
</template>

<script setup>
import TheLogo from "./TheLogo.vue";
import TheLogout from "./TheLogout.vue";
</script>

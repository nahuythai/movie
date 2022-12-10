<template>
  <div class="flex space-x-6">
    <div class="relative w-full">
      <base-input
        placeholder="Search Movies or TV Series"
        class="placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-accent/60 w-full"
      ></base-input>
      <base-icon class="absolute top-4 left-4" name="search"></base-icon>
    </div>
    <base-button class="px-8">Search</base-button>
  </div>
</template>
<script setup>
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import BaseIcon from "./BaseIcon.vue";
</script>

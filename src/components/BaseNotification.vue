<template>
  <TransitionGroup
    name="list"
    tag="ul"
    class="fixed top-24 right-5 z-20 space-y-2 text-center"
  >
    <li v-for="(message, index) in messages" :key="index">
      <div class="flex items-center h-12 w-64 bg-accent">
        <div class="border-4 border-yellow-600 h-full"></div>
        <div class="flex-1">{{ message }}</div>
      </div>
    </li>
  </TransitionGroup>
</template>

<script setup>
import { useNotification } from "../composables/useNotification";

const { messages } = useNotification();
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

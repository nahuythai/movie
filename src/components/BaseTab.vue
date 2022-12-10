<template>
  <div
    class="rounded-lg px-8 py-2 font-semibold text-white cursor-pointer transition duration-300"
    :class="{ 'bg-accent': activeTab == tab }"
    @click="emit('active', tab)"
  >
    {{ tab }}
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  tab: String,
  activeTab: String,
});

const emit = defineEmits(["active"]);
</script>

<template>
  <img :src="icon" :width="width" :height="height" />
</template>

<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  width: String,
  height: String,
  name: String,
});

const icon = computed(() => {
  return new URL(`../assets/images/icons/${props.name}.svg`, import.meta.url);
});
</script>

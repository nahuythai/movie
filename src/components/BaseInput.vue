<template>
  <input
    type="text"
    class="bg-transparent rounded-[12px] py-4 pl-16 pr-4 focus:ring-2 focus:ring-accent/40 border border-gray-600 outline-none text-white"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

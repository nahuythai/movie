<template>
  <div
    class="pb-4 bg-[#20283e]/80 px-3 pt-3 rounded-lg w-full hover:shadow-xl hover:shadow-accent cursor-pointer"
  >
    <slot></slot>
    <p class="text-gray-300 font-semibold">
      <slot name="title"></slot>
    </p>
  </div>
</template>

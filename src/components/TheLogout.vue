<template>
  <div
    class="text-white font-semibold flex space-x-4 cursor-pointer opacity-50 hover:opacity-100"
    @click="signOut"
  >
    <base-icon name="logout" width="24" height="24"></base-icon>
    <span>Logout</span>
  </div>
</template>
<script setup>
import BaseIcon from "./BaseIcon.vue";
import { auth } from "../firebase";
import { router } from "../router";
const signOut = () => {
  auth.signOut();
  router.push({ name: "Auth" });
};
</script>

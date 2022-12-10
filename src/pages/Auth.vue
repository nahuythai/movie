<template>
  <div class="flex justify-between">
    <img src="../assets/images/auth-image.png" alt="" />
    <login-form @login="login"></login-form>
  </div>
</template>

<script setup>
import LoginForm from "../components/LoginForm.vue";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { router } from "../router";
import { useToast, POSITION } from "vue-toastification";

const toast = useToast();

const login = async (values) => {
  try {
    console.log(values);
    const user = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    toast.success("Login successful!", {
      timeout: 2000,
    });
    router.push({ name: "Home", query: { page: 1 } });
  } catch {
    toast.error("Username or password wrong!", {
      timeout: 2000,
    });
  }
};
</script>

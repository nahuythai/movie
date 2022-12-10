<template>
  <div class="max-w-[486px] w-full my-auto">
    <h1 class="text-gray-500 font-bold text-6xl mb-7">Login</h1>
    <form class="space-y-5" @submit.prevent>
      <div class="relative">
        <base-input
          v-model="email"
          type="text"
          placeholder="Email"
          class="w-full"
          :class="{ 'border-red-500 focus:ring-0': emailError }"
          @blur="emailBlur"
        ></base-input>
        <base-icon name="email" class="absolute top-4 left-4"></base-icon>
        <small v-if="emailError" class="text-red-500">{{ emailError }}</small>
      </div>

      <div class="relative">
        <base-input
          v-model="password"
          :type="inputType"
          placeholder="Password"
          class="w-full pr-12"
          @blur="passwordBlur"
        ></base-input>
        <base-icon name="password" class="absolute top-4 left-4"></base-icon>
        <base-icon
          :name="passwordIcon"
          class="absolute top-4 right-4 cursor-pointer"
          @click="isShowPwd = !isShowPwd"
        ></base-icon>
        <small v-if="passwordError" class="text-red-500">{{
          passwordError
        }}</small>
      </div>

      <base-button class="w-full" @click="onSubmit">Login</base-button>
    </form>
  </div>
</template>

<script setup>
import BaseInput from "./BaseInput.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";

import { computed, ref, defineEmits } from "vue";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";

const PASSWORD_MIN_LENGTH = 6;

const validationSchema = object({
  email: string()
    .trim()
    .required("This field must not be empty")
    .email("Email is incorrect"),
  password: string()
    .trim()
    .required("This field must not be empty")
    .min(
      PASSWORD_MIN_LENGTH,
      `Length cannot be less than ${PASSWORD_MIN_LENGTH} characters`
    ),
});

const { handleSubmit } = useForm({
  validationSchema,
});

const isShowPwd = ref(false);

const inputType = computed(() => {
  return isShowPwd.value ? "text" : "password";
});

const passwordIcon = computed(() => {
  return !isShowPwd.value ? "eye-on" : "eye-off";
});

const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField("email");

const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField("password");

const emit = defineEmits();

const onSubmit = handleSubmit((values) => {
  emit("login", values);
});
</script>

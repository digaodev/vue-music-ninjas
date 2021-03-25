<template>
  <form @submit.prevent="handleSubmit">
    <h3>Log in to enjoy your music playlist</h3>
    <input type="email" name="email" placeholder="Email" v-model="email" />
    <input
      type="password"
      name="password"
      placeholder="Password"
      v-model="password"
    />
    <div class="error" v-if="error">{{ error }}</div>

    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading...</button>
  </form>
</template>

<script>
import useLogin from "../../composables/useLogin";
import { ref } from "@vue/reactivity";

export default {
  name: "Login",
  components: {},
  setup() {
    const { login, error, isPending } = useLogin();
    const email = ref("");
    const password = ref("");

    async function handleSubmit() {
      const res = await login(email.value, password.value);

      if (!error.value) {
        console.log("logged in", res);
      }
    }

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>

<style>
</style>
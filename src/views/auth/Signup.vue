<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up to build your music playlist</h3>
    <input type="displayName" name="displayName" placeholder="Display Name" v-model="displayName" />
    <input type="email" name="email" placeholder="Email" v-model="email" />
    <input
      type="password"
      name="password"
      placeholder="Password"
      v-model="password"
    />
    <div class="error" v-if="error">{{ error }}</div>

    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading...</button>
  </form>
</template>

<script>
import useSignup from "../../composables/useSignup";
import { ref } from "@vue/reactivity";

export default {
  name: "Signup",
  components: {},
  setup() {
    const { signup, error, isPending } = useSignup();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    async function handleSubmit() {
      const res = await signup(email.value, password.value, displayName.value);

      if (!error.value) {
        console.log("signed up", res);
      }
    }

    return { displayName, email, password, handleSubmit, error, isPending };
  },
};
</script>

<style>
</style>
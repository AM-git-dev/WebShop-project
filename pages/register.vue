<script setup>
const form = reactive({
  username: "",
  email: "",
  password: "",
});

const config = useRuntimeConfig();
const errorMessage = ref("");

async function register() {
  errorMessage.value = "";
  try {
    const response = await $fetch(`${config.public.apiBase}/register.php`, {
      method: "POST",
      body: form,
    });
    if (response.error) {
      errorMessage.value = response.error;
    } else {
      navigateTo("/login");
    }
  } catch (error) {
    errorMessage.value = "Erreur lors de l'inscription";
  }
}
</script>

<template>
  <div>
    <h1>Inscription</h1>
    <form @submit.prevent="register">
      <input v-model="form.username" placeholder="Nom d'utilisateur" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.password" type="password" placeholder="Mot de passe" required />
      <button type="submit">S'inscrire</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

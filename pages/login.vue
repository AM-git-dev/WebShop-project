<script setup>
const form = reactive({
  email: "",
  password: "",
});
const config = useRuntimeConfig();
const errorMessage = ref("");

async function login() {
  errorMessage.value = "";
  try {
    const response = await $fetch(`${config.public.apiBase}/login.php`, {
      method: "POST",
      body: form,
    });

    console.log("Réponse API :", response);

    if (response.error) {
      errorMessage.value = response.error;
    } else {
      console.log("Token reçu :", response.token);
      console.log("Utilisateur :", response.user);
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.user.role);
      console.log("Token stocké :", localStorage.getItem("token")); // Vérifie si le stockage fonctionne

      if (response.user.role === "admin") {
        navigateTo("/admin");
      } else {
        navigateTo("/dashboard");
      }
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    errorMessage.value = "Erreur lors de la connexion";
  }
}
</script>



<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

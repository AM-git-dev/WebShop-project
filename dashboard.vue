<script setup>
import { useAuth } from "~/composables/useAuth";

console.log("🚀 dashboard.vue monté !"); x

const { token, logout, isAuthenticated } = useAuth();
const config = useRuntimeConfig();
const user = ref(null);

onMounted(async () => {
  console.log("isAuthenticated() :", isAuthenticated()); // 🔍 Vérifie si c'est bien `true`
  console.log("Token dans useAuth :", token.value); // 🔍 Vérifie si le token est bien récupéré

  if (!isAuthenticated()) {
    console.log("Redirection vers login...");
    navigateTo("/login");
    return;
  }

  try {
    const response = await $fetch(`${config.public.apiBase}/protected.php`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    console.log("Réponse API :", response); // 🔍 Vérifie si les données arrivent bien
    user.value = response;
  } catch (error) {
    console.error("Erreur API :", error);
    logout();
  }
});
</script>

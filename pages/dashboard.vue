<script setup>
const config = useRuntimeConfig();
const { token, logout, isAuthenticated } = useAuth();
const user = ref(null);

onMounted(async () => {
  if (!isAuthenticated()) {
    navigateTo("/login");
  }

  try {
    const response = await $fetch(`${config.public.apiBase}/protected.php`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    user.value = response;
  } catch (error) {
    logout();
  }
});
</script>

<template>
  <div class="container">
    <h1>Dashboard</h1>
    <p v-if="user">Bienvenue, {{ user.email }}</p>
    <button @click="logout">Déconnexion</button>
  </div>
</template>

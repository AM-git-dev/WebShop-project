<script setup>
import { useAuth } from "~/composables/useAuth";
const { token, logout, isAuthenticated } = useAuth();
const config = useRuntimeConfig();
const products = ref([]);

definePageMeta({
  layout: "admin", // 🔹 On applique le layout admin (avec la sidebar)
});

onMounted(async () => {
  console.log("Chargement des produits...");
  console.log("Token actuel (avant envoi) :", token.value);
  console.log("Utilisateur authentifié ?", isAuthenticated());

  if (!isAuthenticated()) {
    console.log("Utilisateur non authentifié, redirection vers login");
    navigateTo("/login");
    return;
  }

  try {
    console.log("🔍 Envoi de la requête avec headers :", {
      "Authorization": `Bearer ${token.value}`,
    });
    const response = await $fetch(`${config.public.apiBase}/admin.php`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    console.log("Réponse API admin :", response);
    products.value = response.products;
  } catch (error) {
    console.error("Erreur API admin :", error);
    logout();
  }
});

async function deleteProduct(productId) {
  try {
    await $fetch(`${config.public.apiBase}/delete_product.php`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: {id: productId},
    });

    products.value = products.value.filter(product => product.id !== productId);
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
  }
}
</script>

<template>
  <div class="admin-container">
    <h1>Admin Dashboard</h1>
    <button class="logout-btn" @click="logout">Déconnexion</button>

    <h2>Produits</h2>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Prix</th>
        <th>Stock</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }} €</td>
        <td>{{ product.stock }}</td>
        <td>
          <button class="delete-btn" @click="deleteProduct(product.id)">🗑️ Supprimer</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* 📌 Le conteneur doit remplir tout `.content` */
.admin-container {
  flex: 1;
  padding: 20px;
  background: #1e1e1e;
  color: white;
  width: 100%; /* Prend toute la place dans .content */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 📌 Tableau */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid white;
  padding: 10px;
  text-align: center;
}

th {
  background: #333;
}

/* 📌 Ajustement responsive */
@media screen and (max-width: 768px) {
  .admin-container {
    width: 100%;
    margin-left: 0;
  }
}
</style>

<template>
  <div class="container">
    <div v-if="product" class="product-detail">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }} €</p>
        <NuxtLink to="/products" class="btn-back">← Retour à la liste</NuxtLink>
      </div>
    </div>
    <div v-else>
      <p>Produit non trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import products from "/data/products.js";

const route = useRoute();
const product = products.find(p => p.id == route.params.id);
</script>


<style scoped>
.container {
  text-align: center;
  padding: 50px;
}

.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
}

.product-image {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}

.product-info {
  text-align: center;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
}

.btn-back {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background: #555;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn-back:hover {
  background: #333;
}
</style>
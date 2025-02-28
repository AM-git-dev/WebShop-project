<template>
  <div class="container">
    <h1>Nos Produits</h1>
    <p>Découvrez les catégories de produits que nous proposons.</p>

    <div class="categories-grid">
      <div v-for="category in categories" :key="category.name" class="category-card">
        <img :src="category.image" :alt="category.name" class="category-image" />
        <h2>{{ category.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: "Figurines", image: "/images/categories/figurines.jpg" },
  { name: "Funko Pop", image: "/images/categories/funko.jpg" },
  { name: "Cartes Pokémon", image: "/images/categories/pokemon.jpg" },
  { name: "Accessoires", image: "/images/categories/accessoires.jpg" },
  { name: "Confiseries", image: "/images/categories/confiseries.jpg" },
  { name: "Snacks", image: "/images/categories/snacks.jpg" },
  { name: "Boissons", image: "/images/categories/boissons.jpg" }
];
</script>

<style scoped>

.container {
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  text-align: center;
}


.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}


.category-card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.category-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  background-color: white;
  border-radius: 10px;
}


h2 {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}
</style>

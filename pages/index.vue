<template>
  <div class="home-container">
    <div class="banner">
<!--      <img src="/images/us.jpg" alt="Notre boutique" />-->
    </div>


    <div class="news-section">
      <h2>📢 Dernières Actualités</h2>
      <div v-if="news.length > 0" class="news-grid">
        <div v-for="item in news" :key="item.id" class="news-card">
          <img v-if="item.image" :src="item.image" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p class="news-date">{{ formatDate(item.date) }}</p>
          <p class="news-content">{{ item.content }}</p>
        </div>
      </div>
      <p v-else>Aucune actualité pour le moment.</p>
    </div>
  </div>
</template>

<script setup>
import news from "~/data/news.js";

const formatDate = (dateStr) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateStr).toLocaleDateString("fr-FR", options);
};
</script>

<style scoped>

.home-container {
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  text-align: center;
}


.banner img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}


.news-section {
  margin-top: 40px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.news-card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.news-card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  background-color: #ffffff;
  border-radius: 10px;
}



.news-date {
  font-size: 14px;
  color: #888;
  margin-top: 5px;
}

.news-content {
  font-size: 16px;
  margin-top: 10px;
}
</style>

<template>
  <div class="wrapper">
    <Header />
    <main class="content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}


footer {
  background: #222;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
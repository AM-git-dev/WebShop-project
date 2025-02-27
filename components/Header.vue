<template>
  <header class="header">
    <div class="header-container">
        <NuxtLink to="/" class="logocontainer">
          <img src="/images/logo.png" alt="Logo" class="logo">
        </NuxtLink>

      <button class="burger-menu" @click="toggleMenu">
        ☰
      </button>
      <nav :class="['navbar', { 'open': isMenuOpen }]">
        <button v-if="isMobile" class="close-menu" @click="closeMenu">✖</button>
        <ul class="nav-links">
          <li>
            <router-link to="/" @click="closeMenu">Accueil</router-link>
          </li>
          <li>
            <router-link to="/products" @click="closeMenu">Produits</router-link>
          </li>
          <li>
            <router-link to="/about" @click="closeMenu">À propos</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="isMenuOpen" class="overlay" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const isMobile = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};


const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;


  if (!isMobile.value && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
  document.body.style.overflow = '';
});
</script>

<style scoped>

.header {
  background: #222;
  color: white;
  padding: 15px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}


.logocontainer {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logocontainer img {
  width: 100px;
  transition: transform 0.2s ease-in-out;
}

.logocontainer:hover img {
  transform: scale(1.1);
}


.burger-menu {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}


.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
  transition: color 0.3s, background 0.3s;
  display: block;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background: #007bff;
  border-radius: 5px;
}


@media screen and (max-width: 768px) {

  .burger-menu {
    display: block;
  }

  .navbar {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: #333;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
    transition: right 0.3s ease-in-out;
    z-index: 11;
  }


  .navbar.open {
    right: 0;
  }


  .close-menu {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }


  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0;
    text-align: center;
    width: 100%;
  }

  .nav-links li {
    padding: 0;
    width: 100%;
  }

  .nav-links a {
    padding: 15px 0;
    width: 100%;
    display: block;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
</style>
<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside :class="{ open: sidebarOpen }">
      <h2>Admin Dashboard</h2>
      <!-- Bouton croix visible uniquement en mobile -->
      <button class="close-menu" @click="toggleSidebar">✖</button>
      <nav>
        <ul>
          <li><NuxtLink to="/admin/products">Produits</NuxtLink></li>
          <li><NuxtLink to="/admin/orders">Commandes</NuxtLink></li>
          <li><NuxtLink to="/admin/users">Utilisateurs</NuxtLink></li>
        </ul>
      </nav>
    </aside>

    <!-- Contenu principal -->
    <div class="content">
      <!-- Bouton burger visible uniquement en mobile -->
      <button class="burger-menu" @click="toggleSidebar">☰</button>
      <slot />
    </div>
  </div>
</template>

<script setup>
const sidebarOpen = ref(false);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>

<style scoped>
/* 🎨 Layout Admin */
.admin-layout {
  display: flex;
  min-height: 100vh;
}

/* 📌 Sidebar */
aside {
  width: 250px;
  background: #222;
  color: white;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(0); /* Toujours visible sur desktop */
  transition: transform 0.3s ease-in-out;
}

aside h2 {
  margin-bottom: 20px;
  font-size: 20px;
  text-align: center;
}

aside nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

aside nav li {
  margin-bottom: 15px;
}

aside nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 10px;
  transition: background 0.3s ease-in-out;
}

aside nav a:hover {
  background: #007bff;
  border-radius: 5px;
}

/* 📌 Contenu principal */
.content {
  flex: 1;
  margin-left: 250px; /* Prend en compte la sidebar */
  width: calc(100% - 250px); /* S'étend sur tout l'espace restant */
}

.burger-menu {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 15px; /* 🔹 Maintenant il est à droite */
  z-index: 10;
}

/* 🟢 Bouton croix visible uniquement en mobile */
.close-menu {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px; /* 🔹 Placé à droite pour être cohérent */
}

/* 📌 Ajustement pour mobile */
@media screen and (max-width: 768px) {
  aside {
    transform: translateX(-100%);
    position: fixed;
    z-index: 20;
  }

  aside.open {
    transform: translateX(0);
  }

  .burger-menu {
    display: block; /* Visible en mobile */
  }

  .close-menu {
    display: block; /* Visible uniquement en mobile */
  }

  .content {
    margin-left: 0;
    width: 100%;
  }
}
</style>

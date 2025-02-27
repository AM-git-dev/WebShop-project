<template>
  <div class="contact-info">
    <h2>{{ name }}</h2>
    <div class="info-item">
      <strong>📍 Adresse :</strong> {{ address }}
    </div>
    <div class="info-item">
      <strong>📞 Téléphone :</strong> {{ phone }}
    </div>
    <div class="info-item">
      <strong>📧 Email :</strong> {{ email }}
    </div>
    <div class="info-item horaires-container">
      <strong>🕒 Horaires :</strong>
      <div class="horaires-list">
        <div v-for="(time, day) in hours" :key="day" class="horaires-row">
          <strong>{{ day }}</strong> <span>{{ time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  address: String,
  phone: String,
  email: String,
  hours: Object, // Horaires sous forme d'objet { "Lundi": "10h - 19h", ... }
});
</script>

<style scoped>
/* Conteneur des infos */
.contact-info {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  text-align: left;
}

/* Conteneur des horaires */
.horaires-container {
  display: flex;
  align-items: flex-start;
}

/* "Horaires :" reste sur la même ligne que Lundi */
.horaires-container strong {
  min-width: 120px; /* Largeur minimale pour aligner les jours */
}

/* Liste des horaires */
.horaires-list {
  display: flex;
  position: relative;
  top:4px;
  flex-direction: column;
}

/* Chaque ligne des horaires */
.horaires-row {
  display: flex;
  gap: 10px;
}

/* Ajustement pour aligner les jours et horaires */
.horaires-row strong {
  min-width: 100px;
  text-align: left;
}

.horaires-row span {
  text-align: left;
}
</style>

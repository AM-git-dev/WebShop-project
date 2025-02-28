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
  hours: Object,
});
</script>

<style scoped>

.contact-info {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  text-align: left;
}


.horaires-container {
  display: flex;
  align-items: flex-start;
}

.horaires-container strong {
  min-width: 120px;
}

.horaires-list {
  display: flex;
  position: relative;
  top:4px;
  flex-direction: column;
}

.horaires-row {
  display: flex;
  gap: 10px;
}

.horaires-row strong {
  min-width: 100px;
  text-align: left;
}

.horaires-row span {
  text-align: left;
}
</style>

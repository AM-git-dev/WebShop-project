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
        <div v-for="(time, day) in hours" :key="day"
             :class="['horaires-row', day === 'Dimanche' ? 'sunday' : '']">
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

.info-item {
  margin-bottom: 4px;
}
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
  flex-wrap: wrap;
  justify-content: space-between;
}

.horaires-container strong {
  min-width: 120px;
}

.horaires-list {
  margin-top: 4px ;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
}

.horaires-row {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 8px 12px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.horaires-row strong {
  min-width: 100px;
  text-align: left;
}

.horaires-row span {
  text-align: left;
}


.horaires-row.sunday {
  grid-column: span 2;
  justify-content: center;
  text-align: center;
}

@media screen and (max-width: 400px) {
  .horaires-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .horaires-row {
    flex-direction: column;
    text-align: left;
    gap: 3px;
  }

  .horaires-row strong {
    min-width: auto;
    display: block;
  }

  .horaires-row span {
    display: block;
    text-align: left;
  }

  .horaires-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
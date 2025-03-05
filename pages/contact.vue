<template>
  <div class="contact-container">
    <h1>Nos Boutiques</h1>

    <ContactInfo
        name="Boutique - Charleroi"
        address="Rive Gauche , Place Verte 20 , 6000 Charleroi. "
        phone="+32 123 45 67 89"
        email="webshop@webshop.be"
        :hours="{
        'Lundi': '10h - 19h',
        'Mardi': '10h - 19h',
        'Mercredi': '10h - 19h',
        'Jeudi': '10h - 19h',
        'Vendredi': '10h - 20h',
        'Samedi': '10h - 19h',
        'Dimanche': 'Fermé'
      }"
    />

    <ContactInfo
        name="Boutique 2 - Bruxelles"
        address="Rue du Placeholder 35, 1000 Bruxelles."
        phone="+32 123 45 67 89"
        email="webshop@webshop.be"
        :hours="{
        'Lundi': 'Fermé',
        'Mardi': '12h - 19h',
        'Mercredi': '12h - 19h',
        'Jeudi': '12h - 19h',
        'Vendredi': '12h - 19h',
        'Samedi': '12h - 19h',
        'Dimanche': '11h - 15h'
      }"
    />


    <form class="contact-form">
      <label for="name">Nom :</label>
      <input type="text" id="name" placeholder="Votre nom" required />

      <label for="email">Email :</label>
      <input type="email" id="email" placeholder="Votre email" required />

      <label for="message">Message :</label>
      <textarea id="message" rows="4" placeholder="Votre message..." required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script setup>
import ContactInfo from "@/components/ContactInfo.vue";
</script>

<style scoped>

.contact-container {
  max-width: 600px;
  margin: auto;
  padding: 40px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form label {
  font-weight: bold;
  text-align: left;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-form button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.contact-form button:hover {
  background: #0056b3;
}

</style>

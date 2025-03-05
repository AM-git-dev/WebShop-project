<template>
  <div class="about-container">
    <h1>Qui sommes-nous ?</h1>

    <div class="about-image">
      <img src="/images/us.jpg" alt="Les fondateurs de la boutique" />
    </div>

    <div class="about-text">
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi aperiam dolorem, et iste porro quam quasi, quo quod saepe sunt, unde. Accusantium aperiam aut consectetur debitis deserunt dolores doloribus expedita, numquam qui quisquam recusandae, voluptates. Aliquid, amet dignissimos eveniet, magni modi molestias quae quaerat quis recusandae repellendus vero!
      </p>
    </div>

    <div class="timeline">
      <h2>Notre histoire</h2>
      <ul>
        <li>
          <span class="date">2020</span>
          <p>Ouverture de la première boutique</p>
        </li>
        <li>
          <span class="date">2022</span>
          <p>Idée de créer le WebShop</p>
        </li>
        <li>
          <span class="date">2025</span>
          <p>Ouverture de la seconde boutique</p>
        </li>
      </ul>
    </div>

    <div class="map">
      <h2>📍 Où nous trouver ?</h2>

      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.15788296156!2d4.40431075440892!3d50.40812880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c22674d5f842ef%3A0xf0afced165bd2ea9!2sShopping%20Rive%20Gauche%20Charleroi!5e0!3m2!1sfr!2sbe!4v1740742921667!5m2!1sfr!2sbe"
          width="100%"
          height="600"
          style="border:0;"
          allowfullscreen=""
          loading="lazy">
      </iframe>

    </div>
  </div>
</template>

<style scoped>

.about-container {
  max-width: 900px;
  margin: auto;
  padding: 40px;
  text-align: center;
}


.about-image img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}


.about-text {
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
}


.timeline {
  margin-top: 40px;
  text-align: left;
}

.timeline h2 {
  text-align: center;
}

.timeline ul {
  list-style: none;
  padding: 0;
}

.timeline li {
  margin-bottom: 20px;
  padding-left: 20px;
  position: relative;
}

.timeline .date {
  font-weight: bold;
  color: #007bff;
  margin-right: 10px;
}

.map {
  margin-top: 40px;
}
</style>

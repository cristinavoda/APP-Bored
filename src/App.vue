<template>
   
  <div class="app-container">
    <div class="filters">
      <button v-for="category in categories" :key="category" @click="setCategory(category)">
        {{ category }}
      </button>
    </div>
    <div class="activity-display">
      <p>{{ activity }}</p>
      <button @click="fetchActivity">Generate</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      categories: ['Social😀', 'Educatión🧑🏻‍🎓', 'Activity📺📷⌨️🛠️🎹🎤🎧📖', 'Cooking👨🏻‍🍳👩🏻‍🍳', 'Relaxation🧘🏻', 'Work out🏋🏻‍♀️🏊🏻'],
      activity: '',
      selectedCategory: ''
    };
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category.toLowerCase();
    },
    fetchActivity() {
      let url = 'https://bored-api.appbrewery.com/';
      if (this.selectedCategory) {
        url += `?type=${this.selectedCategory}`;
      }
      axios.get(url)
        .then(response => {
          this.activity = response.data.activity;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
/* Añade estilos aquí para dar el aspecto similar a la imagen */
.app-container {
  text-align: center;
  padding: 20px;
}
.filters button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
.activity-display {
  margin-top: 20px;
}
</style>

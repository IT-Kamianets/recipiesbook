<template>
    <div>
      <div class="bg-white border-2 border-orange-200 shadow-xl rounded-xl p-6 mb-4 cursor-pointer" @click="openModal">
        <img :src="image" alt="recipe image" class="rounded w-full h-48 object-cover mb-4" />
        <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
        <p class="text-gray-700">{{ description }}</p>
      </div>
  
      <!-- Модальне вікно -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div class="bg-white w-[500px] rounded-xl shadow-lg max-w-lg p-6 relative">
          <button @click="closeModal" class="absolute top-2 right-2 text-gray-700 hover:text-gray-900">&times;</button>
          <img :src="image" alt="recipe image" class="rounded w-full h-48 object-cover mb-4" />
          <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
          <p class="text-gray-700 mb-4">{{ recipe || 'Рецепт не знайдено' }}</p> <!-- Перевірка -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeCard',
    props: {
      title: String,
      description: String,
      image: String,
      recipe: String,
    },
    data() {
      return {
        isModalOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .fixed {
    transition: opacity 0.3s ease;
  }
  </style>
  
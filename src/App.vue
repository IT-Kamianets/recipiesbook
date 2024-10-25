<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl text-orange-600 font-bold text-center mb-8 font-bold">Recipes Book</h1>
    
    <!-- Пошук та Фільтрація -->
    <div class="flex justify-center mb-8 gap-4">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Пошук рецептів..."
        class="px-4 py-2 border rounded-lg w-1/3 hover:border-2 hover:border-gray-500"
      />
      <select v-model="selectedType" class="px-4 py-2 border rounded-lg w-1/4">
        <option value="">Всі типи</option>
        <option value="основна страва">Основна страва</option>
        <option value="закуска">Закуска</option>
        <option value="десерт">Десерт</option>
      </select>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RecipeCard
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :title="recipe.title"
        :description="recipe.description"
        :image="recipe.image"
        :recipe="recipe.recipe"
      />
    </div>
  </div>
</template>

<script>
import RecipeCard from './components/RecipeCard.vue';
import { recipes } from './mockRecipes';

export default {
  name: 'App',
  components: {
    RecipeCard,
  },
  data() {
    return {
      searchTerm: '',
      selectedType: '',
      recipes,
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter((recipe) => {
        const matchesSearch = recipe.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
        const matchesType =
          this.selectedType === '' || recipe.type === this.selectedType;
        return matchesSearch && matchesType;
      });
    },
  },
};
</script>

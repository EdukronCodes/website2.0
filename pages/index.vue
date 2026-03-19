<template>
  <div class="min-h-full">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="text-center animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Welcome to Edukron
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Master Data Science, AI, Machine Learning, and more with our comprehensive learning platform featuring 1000+ expertly curated topics.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="scrollToCategories"
            class="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Learning
          </button>
          <NuxtLink
            to="/about"
            class="px-8 py-3 border border-blue-500 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="glass p-6 rounded-xl text-center">
          <div class="text-4xl font-bold text-blue-400 mb-2">12</div>
          <div class="text-sm text-gray-400">Categories</div>
        </div>
        <div class="glass p-6 rounded-xl text-center">
          <div class="text-4xl font-bold text-purple-400 mb-2">1000+</div>
          <div class="text-sm text-gray-400">Topics</div>
        </div>
        <div class="glass p-6 rounded-xl text-center">
          <div class="text-4xl font-bold text-green-400 mb-2">Expert</div>
          <div class="text-sm text-gray-400">Curated</div>
        </div>
        <div class="glass p-6 rounded-xl text-center">
          <div class="text-4xl font-bold text-pink-400 mb-2">Free</div>
          <div class="text-sm text-gray-400">Forever</div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section id="categories" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Explore Our <span class="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Categories</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup name="grid" tag="div">
          <NuxtLink
            v-for="category in categories"
            :key="category.id"
            :to="`/category/${category.id}`"
            class="group glass border border-white/10 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="text-5xl group-hover:scale-110 transition-transform duration-300">{{ category.emoji }}</div>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">{{ category.topicCount }} topics</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{{ category.name }}</h3>
            <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              Comprehensive coverage of {{ category.name.toLowerCase() }} concepts and applications.
            </p>
          </NuxtLink>
        </TransitionGroup>
      </div>
    </section>

    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
      <h2 class="text-3xl font-bold mb-12 text-center text-white">Why Choose Edukron?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="glass p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
          <div class="text-3xl mb-4">🎯</div>
          <h3 class="text-lg font-bold text-white mb-2">Curated Content</h3>
          <p class="text-gray-400 text-sm">Expertly selected topics covering fundamentals to advanced concepts.</p>
        </div>
        <div class="glass p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
          <div class="text-3xl mb-4">⚡</div>
          <h3 class="text-lg font-bold text-white mb-2">Fast & Responsive</h3>
          <p class="text-gray-400 text-sm">Lightning-fast performance with a beautiful, modern interface.</p>
        </div>
        <div class="glass p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
          <div class="text-3xl mb-4">🔍</div>
          <h3 class="text-lg font-bold text-white mb-2">Advanced Search</h3>
          <p class="text-gray-400 text-sm">Instantly find any topic across all categories with powerful search.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '~/composables/useContent'

const { categories } = useContent()

const scrollToCategories = () => {
  const element = document.getElementById('categories')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.grid-enter-active,
.grid-leave-active {
  transition: all 0.5s ease;
}

.grid-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.grid-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.grid-move {
  transition: transform 0.5s ease;
}
</style>

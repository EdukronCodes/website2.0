<template>
  <div class="min-h-full">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-4xl font-bold text-white mb-8">About Edukron</h1>

      <div class="space-y-8 text-gray-300">
        <section class="glass p-8 rounded-xl border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p>
            Edukron is dedicated to providing comprehensive, high-quality educational content for aspiring data scientists, machine learning engineers, and tech professionals. Our platform brings together expertly curated topics covering the latest advances in AI, ML, data science, and more.
          </p>
        </section>

        <section class="glass p-8 rounded-xl border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-4">What We Offer</h2>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-2xl">📚</span>
              <div>
                <strong class="text-white">1000+ Topics</strong> - Comprehensive coverage across 12 major categories
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-2xl">🎯</span>
              <div>
                <strong class="text-white">Structured Learning</strong> - Organized from basics to advanced concepts
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-2xl">📖</span>
              <div>
                <strong class="text-white">Markdown Content</strong> - Clean, readable documentation format
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-2xl">⚡</span>
              <div>
                <strong class="text-white">Modern Interface</strong> - Fast, responsive, and beautiful design
              </div>
            </li>
          </ul>
        </section>

        <section class="glass p-8 rounded-xl border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-4">Categories</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="category in categories" :key="category.id" class="flex items-center gap-3">
              <span class="text-3xl">{{ category.emoji }}</span>
              <div>
                <p class="font-semibold text-white">{{ category.name }}</p>
                <p class="text-sm text-gray-400">{{ category.topicCount }} topics</p>
              </div>
            </div>
          </div>
        </section>

        <section class="glass p-8 rounded-xl border border-white/10">
          <h2 class="text-2xl font-bold text-white mb-4">Get Started</h2>
          <p class="mb-4">
            Ready to start your learning journey? Simply navigate to our categories and select a topic that interests you. Each topic contains detailed explanations, examples, and best practices.
          </p>
          <NuxtLink
            to="/"
            class="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            Explore Categories
          </NuxtLink>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContent } from '~/composables/useContent'

const { categories } = useContent()
</script>

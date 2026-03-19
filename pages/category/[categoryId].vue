<template>
  <div class="flex h-screen pt-20">
    <!-- Sidebar -->
    <AppSidebar
      v-if="categoryId"
      :category-id="categoryId as string"
    />

    <!-- Main Content -->
    <main class="flex-1 overflow-auto bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <!-- Category Welcome -->
        <div class="text-center py-20">
          <div class="text-7xl mb-6 animate-float">{{ currentCategory?.emoji }}</div>
          <h1 class="text-4xl font-bold text-white mb-4">{{ currentCategory?.name }}</h1>
          <p class="text-xl text-gray-400 mb-8">
            Click on a topic in the sidebar to start learning
          </p>
          <div class="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
            <div class="glass p-4 rounded-lg">
              <div class="text-2xl font-bold text-blue-400">{{ topicCount }}</div>
              <div class="text-xs text-gray-400 mt-2">Topics</div>
            </div>
            <div class="glass p-4 rounded-lg">
              <div class="text-2xl font-bold text-purple-400">Beginner</div>
              <div class="text-xs text-gray-400 mt-2">Friendly</div>
            </div>
            <div class="glass p-4 rounded-lg">
              <div class="text-2xl font-bold text-green-400">Expert</div>
              <div class="text-xs text-gray-400 mt-2">Curated</div>
            </div>
          </div>

          <!-- Topics Preview -->
          <div class="mt-16">
            <h2 class="text-2xl font-bold text-white mb-8">Top Topics in this Category</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NuxtLink
                v-for="(topic, idx) in topics.slice(0, 6)"
                :key="topic.id"
                :to="`/category/${categoryId}/${topic.index}`"
                class="glass border border-white/10 hover:border-blue-500/50 rounded-lg p-4 text-left transition-all hover:shadow-lg"
              >
                <div class="flex items-center gap-3">
                  <span class="text-2xl font-bold text-blue-400">{{ String(idx + 1).padStart(2, '0') }}</span>
                  <div>
                    <p class="font-semibold text-white hover:text-blue-300 transition-colors">{{ topic.name }}</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
            <NuxtLink
              v-if="topicCount > 6"
              :to="`/category/${categoryId}/1`"
              class="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all"
            >
              View All {{ topicCount }} Topics →
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useContent } from '~/composables/useContent'

const route = useRoute()
const { getTopics, categories } = useContent()

const categoryId = computed(() => route.params.categoryId as string)
const topics = computed(() => getTopics(categoryId.value))
const topicCount = computed(() => topics.value.length)

const currentCategory = computed(() => {
  return categories.value.find(cat => cat.id === categoryId.value)
})
</script>

<template>
  <div class="flex h-full">
    <!-- Sidebar Toggle Button (Mobile) -->
    <button
      v-if="!sidebarOpen"
      @click="sidebarOpen = true"
      class="fixed left-4 bottom-4 z-40 p-3 rounded-full glass-dark border border-white/20 hover:border-white/40 transition-all lg:hidden"
      title="Toggle Sidebar"
    >
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Sidebar -->
    <aside
      class="fixed inset-y-20 left-0 lg:relative lg:inset-auto w-80 glass-dark border-r border-white/10 overflow-hidden flex flex-col transition-transform lg:translate-x-0 duration-300 z-30"
      :class="{ 'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen }"
    >
      <!-- Category Header -->
      <div class="p-6 border-b border-white/10">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-white animate-fade-in">
            <span class="text-3xl mr-2">{{ currentCategory?.emoji }}</span>
            <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {{ currentCategory?.name }}
            </span>
          </h2>
          <button
            @click="sidebarOpen = false"
            class="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Topic Count -->
        <p class="text-sm text-gray-400">{{ topicCount }} topics</p>

        <!-- Search in Category -->
        <div class="mt-4">
          <input
            v-model="searchInCategory"
            type="text"
            placeholder="Search topics..."
            class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      <!-- Topics List -->
      <div class="flex-1 overflow-y-auto">
        <nav class="space-y-1 p-4">
          <TransitionGroup name="list">
            <NuxtLink
              v-for="topic in filteredTopics"
              :key="topic.id"
              :to="`/category/${categoryId}/${topic.index}`"
              class="flex items-start p-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              @click="sidebarOpen = false"
              :class="{ 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-500': isActiveTopic(topic.id) }"
            >
              <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded bg-white/5 group-hover:bg-white/10 mr-3 text-xs font-bold text-gray-400 group-hover:text-gray-300 transition-colors">
                {{ topic.index }}
              </span>
              <span class="flex-1 line-clamp-2 group-hover:line-clamp-none">{{ topic.name }}</span>
            </NuxtLink>
          </TransitionGroup>
        </nav>
      </div>

      <!-- Sidebar Footer -->
      <div class="border-t border-white/10 p-4 bg-black/30">
        <p class="text-xs text-gray-500 text-center">
          {{ filteredTopics.length }} of {{ topicCount }} topics
        </p>
      </div>
    </aside>

    <!-- Overlay (Mobile) -->
    <Transition name="fade">
      <div
        v-if="sidebarOpen"
        @click="sidebarOpen = false"
        class="fixed inset-0 bg-black/40 lg:hidden z-20"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

// Composables are auto-imported in Nuxt
const props = defineProps<{
  categoryId: string
  currentTopicId?: string
}>()

const sidebarOpen = ref(false)
const searchInCategory = ref('')
const route = useRoute()
const { getTopics, categories } = useContent()

const topics = computed(() => getTopics(props.categoryId))

const currentCategory = computed(() => {
  return categories.value.find(cat => cat.id === props.categoryId)
})

const topicCount = computed(() => topics.value.length)

const filteredTopics = computed(() => {
  if (!searchInCategory.value) return topics.value
  const query = searchInCategory.value.toLowerCase()
  return topics.value.filter(topic => topic.name.toLowerCase().includes(query))
})

const isActiveTopic = (topicId: string) => {
  return topicId === props.currentTopicId
}

// Close sidebar when route changes on mobile
watch(
  () => route.path,
  () => {
    if (window.innerWidth < 1024) {
      sidebarOpen.value = false
    }
  }
)
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

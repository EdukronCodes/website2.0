<template>
  <header class="sticky top-0 z-50">
    <!-- Glassmorphic Navbar -->
    <nav class="glass-dark border-b border-white/10 shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 group"
          >
            <div class="text-2xl md:text-3xl">📚</div>
            <div class="hidden sm:block">
              <h1 class="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
                Edukron
              </h1>
              <p class="text-xs text-gray-400 group-hover:text-gray-300">Learning Platform</p>
            </div>
          </NuxtLink>

          <!-- Navigation Links (Desktop) -->
          <div class="hidden lg:flex items-center space-x-1">
            <button
              @click="scrollToCategories"
              class="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Categories
            </button>
            <button
              @click="showSearch = true"
              class="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Search
            </button>
            <NuxtLink
              to="/about"
              class="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              About
            </NuxtLink>
          </div>

          <!-- Right Controls -->
          <div class="flex items-center space-x-4">
            <!-- Search Icon (Mobile) -->
            <button
              @click="showSearch = true"
              class="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              title="Search"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              :title="isDark ? 'Light Mode' : 'Dark Mode'"
            >
              <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464a1 1 0 11-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zm1.414 8.486a1 1 0 11-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM5 11a1 1 0 100-2H4a1 1 0 100 2h1zM3.464 5.05a1 1 0 011.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707z" clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Mobile Menu Toggle -->
            <button
              @click="showMobileMenu = !showMobileMenu"
              class="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <svg v-if="!showMobileMenu" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide-down">
          <div v-if="showMobileMenu" class="lg:hidden border-t border-white/10 bg-black/30">
            <div class="px-4 py-4 space-y-2">
              <button
                @click="scrollToCategories"
                class="block w-full text-left px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                Categories
              </button>
              <NuxtLink
                to="/about"
                class="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                About
              </NuxtLink>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Search Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showSearch" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start pt-20">
          <div class="w-full max-w-2xl mx-auto px-4 animate-slide-in-down">
            <div class="glass-dark border border-white/20 rounded-2xl overflow-hidden">
              <div class="p-4">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search topics..."
                  class="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                  @keydown.escape="showSearch = false"
                  @keydown.enter="handleSearchResult"
                />
              </div>
              <div v-if="searchResults.length > 0" class="border-t border-white/10 max-h-96 overflow-y-auto">
                <NuxtLink
                  v-for="result in searchResults.slice(0, 10)"
                  :key="result.topicId"
                  :to="`/category/${result.categoryId}/${result.index}`"
                  class="flex items-center p-3 hover:bg-white/5 border-b border-white/5 last:border-b-0 transition-colors"
                  @click="showSearch = false"
                >
                  <span class="text-2xl mr-3">{{ result.emoji }}</span>
                  <div class="flex-1">
                    <p class="text-gray-300">{{ result.topicName }}</p>
                    <p class="text-xs text-gray-500">{{ result.categoryName }}</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContent } from '~/composables/useContent'

const showMobileMenu = ref(false)
const showSearch = ref(false)
const searchQuery = ref('')
const isDark = ref(true)

const { searchTopics } = useContent()

const searchResults = computed(() => {
  if (!searchQuery.value) return []
  return searchTopics(searchQuery.value)
})

const scrollToCategories = () => {
  showMobileMenu.value = false
  const element = document.getElementById('categories')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const handleSearchResult = () => {
  if (searchResults.value.length > 0) {
    showSearch.value = false
  }
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  max-height: 0;
}

.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
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

<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-gray-100">
    <!-- Navbar -->
    <AppNavbar />

    <!-- Main Content Area -->
    <div class="pt-4">
      <slot />
    </div>

    <!-- Footer -->
    <footer class="border-t border-white/10 bg-black/30 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4 text-white">Edukron</h3>
            <p class="text-sm text-gray-400">Comprehensive learning platform for Data Science, AI, ML, and more.</p>
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-4 text-white">Quick Links</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-4 text-white">Categories</h4>
            <p class="text-sm text-gray-500">12 Categories • 1000+ Topics</p>
          </div>
        </div>
        <div class="border-t border-white/10 mt-8 pt-8">
          <p class="text-center text-sm text-gray-500">© 2026 Edukron Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Composables are auto-imported in Nuxt
const { loadContent } = useContent()

onMounted(async () => {
  await loadContent()
})
</script>

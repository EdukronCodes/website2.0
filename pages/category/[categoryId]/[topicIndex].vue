<template>
  <div class="flex h-screen pt-20">
    <!-- Sidebar -->
    <AppSidebar
      v-if="categoryId"
      :category-id="categoryId as string"
      :current-topic-id="`${categoryId}-${topicIndex}`"
    />

    <!-- Main Content -->
    <main class="flex-1 overflow-auto bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div v-if="topicIndex" class="max-w-4xl mx-auto px-6 py-8">
        <!-- Topic Header -->
        <div class="mb-8 animate-fade-in">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl">{{ currentCategory?.emoji }}</div>
            <div>
              <h1 class="text-3xl md:text-4xl font-bold text-white">{{ currentTopic?.name }}</h1>
              <p class="text-gray-400 mt-2">{{ currentCategory?.name }} • Topic {{ topicIndex }}</p>
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex items-center justify-between mt-6">
            <NuxtLink
              v-if="previousTopic"
              :to="`/category/${categoryId}/${Number(topicIndex) - 1}`"
              class="flex items-center gap-2 px-4 py-2 glass border border-white/20 hover:border-blue-500/50 rounded-lg transition-all hover:shadow-lg"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </NuxtLink>
            <div v-else />

            <div class="flex items-center gap-2">
              <input
                type="range"
                :min="1"
                :max="topicCount"
                :value="topicIndex"
                @change="(e) => navigateToTopic((e.target as HTMLInputElement).value)"
                class="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <span class="text-sm text-gray-400 min-w-[3rem] text-right">{{ topicIndex }}/{{ topicCount }}</span>
            </div>

            <NuxtLink
              v-if="nextTopic"
              :to="`/category/${categoryId}/${Number(topicIndex) + 1}`"
              class="flex items-center gap-2 px-4 py-2 glass border border-white/20 hover:border-blue-500/50 rounded-lg transition-all hover:shadow-lg"
            >
              Next
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Separator -->
        <div class="border-t border-white/10 my-8" />

        <!-- Content -->
        <div v-if="loading" class="flex items-center justify-center py-12">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
            <p class="text-gray-400">Loading content...</p>
          </div>
        </div>

        <div v-else class="prose prose-invert max-w-none">
          <div
            v-html="renderedContent"
            class="text-gray-200 leading-relaxed"
            :class="{ 'text-gray-400': !contentLoaded }"
          />
        </div>

        <!-- Footer Navigation -->
        <div class="border-t border-white/10 mt-12 pt-8 flex items-center justify-between">
          <NuxtLink
            v-if="previousTopic"
            :to="`/category/${categoryId}/${Number(topicIndex) - 1}`"
            class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{ previousTopic.name }}
          </NuxtLink>
          <div v-else />

          <NuxtLink
            to="/"
            class="text-gray-400 hover:text-white transition-colors"
          >
            Back to Categories
          </NuxtLink>

          <NuxtLink
            v-if="nextTopic"
            :to="`/category/${categoryId}/${Number(topicIndex) + 1}`"
            class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            {{ nextTopic.name }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
          <div v-else />
        </div>
      </div>

      <!-- No Topic Selected -->
      <div v-else class="flex items-center justify-center h-full">
        <div class="text-center">
          <div class="text-6xl mb-4">📚</div>
          <h2 class="text-2xl font-bold text-white mb-2">Select a Topic</h2>
          <p class="text-gray-400">Choose a topic from the sidebar to start learning</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useContent } from '~/composables/useContent'
import { marked } from 'marked'

const route = useRoute()
const router = useRouter()
const { getTopics, getMarkdownContent, categories } = useContent()

const categoryId = computed(() => route.params.categoryId as string)
const topicIndex = computed(() => Number(route.params.topicIndex) || null)

const loading = ref(false)
const contentLoaded = ref(false)
const content = ref('')

const topics = computed(() => getTopics(categoryId.value))
const topicCount = computed(() => topics.value.length)

const currentCategory = computed(() => {
  return categories.value.find(cat => cat.id === categoryId.value)
})

const currentTopic = computed(() => {
  if (!topicIndex.value || topicIndex.value < 1) return null
  return topics.value[topicIndex.value - 1]
})

const previousTopic = computed(() => {
  if (!topicIndex.value || topicIndex.value <= 1) return null
  return topics.value[topicIndex.value - 2]
})

const nextTopic = computed(() => {
  if (!topicIndex.value || topicIndex.value >= topicCount.value) return null
  return topics.value[topicIndex.value]
})

const renderedContent = computed(() => {
  if (!content.value && !contentLoaded.value) {
    return `<p class="text-gray-400">No content available for this topic yet.</p>`
  }
  return marked(content.value)
})

const loadContent = async () => {
  if (!topicIndex.value || !categoryId.value) {
    content.value = ''
    contentLoaded.value = false
    return
  }

  loading.value = true
  contentLoaded.value = false

  try {
    const markdown = await getMarkdownContent(categoryId.value, topicIndex.value)
    content.value = markdown
    contentLoaded.value = true
  } catch (error) {
    console.error('Error loading content:', error)
    content.value = ''
    contentLoaded.value = false
  } finally {
    loading.value = false
  }
}

const navigateToTopic = (index: string) => {
  const idx = Number(index)
  if (idx >= 1 && idx <= topicCount.value) {
    router.push(`/category/${categoryId.value}/${idx}`)
  }
}

// Load content when topic changes
watch(topicIndex, () => {
  loadContent()
})

// Initial load
onMounted(() => {
  loadContent()
})
</script>

<style scoped>
:deep(h1), :deep(h2), :deep(h3) {
  @apply text-white font-bold mt-6 mb-3;
}

:deep(h1) { @apply text-2xl; }
:deep(h2) { @apply text-xl; }
:deep(h3) { @apply text-lg; }

:deep(p) {
  @apply mb-4 text-gray-300;
}

:deep(ul), :deep(ol) {
  @apply ml-6 mb-4;
}

:deep(li) {
  @apply mb-2 text-gray-300;
}

:deep(code) {
  @apply bg-black/50 px-2 py-1 rounded text-blue-400 font-mono text-sm;
}

:deep(pre) {
  @apply bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto mb-4;
}

:deep(blockquote) {
  @apply border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4;
}

:deep(table) {
  @apply w-full border-collapse my-4;
}

:deep(th), :deep(td) {
  @apply border border-white/10 px-4 py-2 text-left;
}

:deep(th) {
  @apply bg-white/5;
}

:deep(a) {
  @apply text-blue-400 hover:text-blue-300 underline transition-colors;
}
</style>

// composables/useContent.ts
import { ref, computed } from 'vue'

export const useContent = () => {
  const topicConfig = ref<any>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Load topicConfig from the markdown.js file
  const loadContent = async () => {
    if (topicConfig.value) return

    loading.value = true
    error.value = null

    try {
      // Create a temporary script element to load the markdown.js
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = '/markdown.js'
        script.onload = () => {
          if ((window as any).topicConfig) {
            topicConfig.value = (window as any).topicConfig
          }
          loading.value = false
          resolve(true)
        }
        script.onerror = () => {
          error.value = 'Failed to load content configuration'
          loading.value = false
          resolve(false)
        }
        document.head.appendChild(script)
      })
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      loading.value = false
    }
  }

  // Get all categories
  const categories = computed(() => {
    if (!topicConfig.value) return []
    return Object.entries(topicConfig.value).map(([categoryId, categoryData]: [string, any]) => ({
      id: categoryId,
      name: categoryData.name,
      emoji: categoryData.emoji,
      topicCount: categoryData.topics.length,
    }))
  })

  // Get topics for a specific category
  const getTopics = (categoryId: string) => {
    if (!topicConfig.value || !topicConfig.value[categoryId]) return []
    const category = topicConfig.value[categoryId]
    return category.topics.map((topicName: string, index: number) => ({
      id: `${categoryId}-${index + 1}`,
      name: topicName,
      index: index + 1,
      fileName: `${String(index + 1).padStart(3, '0')}-${topicName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[()]/g, '')}.md`,
    }))
  }

  // Get markdown content for a topic
  const getMarkdownContent = async (categoryId: string, index: number) => {
    try {
      const fileName = `${String(index).padStart(3, '0')}-${(topicConfig.value[categoryId]?.topics[index - 1] || '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[()]/g, '')}.md`
      const response = await fetch(`/docs/${categoryId}/${fileName}`)
      if (!response.ok) throw new Error('Not found')
      return await response.text()
    } catch (err) {
      return `# Topic Not Found\n\nThe requested topic could not be loaded.`
    }
  }

  // Search topics
  const searchTopics = (query: string) => {
    if (!topicConfig.value || !query) return []
    const lowerQuery = query.toLowerCase()
    const results: any[] = []

    for (const [categoryId, categoryData] of Object.entries(topicConfig.value)) {
      const category = categoryData as any
      category.topics.forEach((topicName: string, index: number) => {
        if (topicName.toLowerCase().includes(lowerQuery)) {
          results.push({
            categoryId,
            categoryName: category.name,
            emoji: category.emoji,
            topicId: `${categoryId}-${index + 1}`,
            topicName,
            index: index + 1,
          })
        }
      })
    }

    return results
  }

  return {
    topicConfig,
    loading,
    error,
    loadContent,
    categories,
    getTopics,
    getMarkdownContent,
    searchTopics,
  }
}

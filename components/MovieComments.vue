<script setup lang="ts">
import type { Database } from '~/types/database.types'

const props = defineProps<{
  movieId: number
}>()

const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()

const comment = ref('')
const comments = ref<Database['public']['Tables']['comments']['Row'][]>([])
const isLoading = ref(false)
const editingCommentId = ref<number | null>(null)
const editedComment = ref('')

async function loadComments() {
  const { data } = await supabase
    .from('comments')
    .select('*')
    .eq('movie_id', props.movieId)
    .order('created_at', { ascending: false })

  if (data)
    comments.value = data
}

async function addComment() {
  if (!user.value || !comment.value.trim())
    return

  isLoading.value = true

  try {
    await supabase.from('comments').insert({
      comment: comment.value.trim(),
      movie_id: props.movieId,
      user_id: user.value.id,
    })

    comment.value = ''
    await loadComments()
  }
  catch (error) {
    console.error('Error adding comment:', error)
  }
  finally {
    isLoading.value = false
  }
}

async function deleteComment(commentId: number) {
  if (!user.value)
    return

  isLoading.value = true

  try {
    await supabase
      .from('comments')
      .delete()
      .eq('id', commentId)

    await loadComments()
  }
  catch (error) {
    console.error('Error deleting comment:', error)
  }
  finally {
    isLoading.value = false
  }
}

async function editComment(commentId: number) {
  if (!user.value || !editedComment.value.trim())
    return

  isLoading.value = true

  try {
    await supabase
      .from('comments')
      .update({ comment: editedComment.value.trim() })
      .eq('id', commentId)

    editingCommentId.value = null
    editedComment.value = ''
    await loadComments()
  }
  catch (error) {
    console.error('Error updating comment:', error)
  }
  finally {
    isLoading.value = false
  }
}

function startEditing(comment: Database['public']['Tables']['comments']['Row']) {
  editingCommentId.value = comment.id
  editedComment.value = comment.comment
}

watch(() => props.movieId, () => {
  loadComments()
})

onMounted(() => {
  loadComments()

  const subscription = supabase
    .channel('comments')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'comments',
        filter: `movie_id=eq.${props.movieId}`,
      },
      () => {
        loadComments()
      },
    )
    .subscribe()

  onUnmounted(() => {
    subscription.unsubscribe()
  })
})

// Add this helper function for relative time
function getRelativeTime(date: string) {
  const now = new Date()
  const commentDate = new Date(date)
  const diffInSeconds = Math.floor((now.getTime() - commentDate.getTime()) / 1000)

  if (diffInSeconds < 60)
    return 'Hozirgina'
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} daqiqa oldin`
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} soat oldin`
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} kun oldin`

  return commentDate.toLocaleDateString()
}
</script>

<template>
  <div mt-8 class="comments-section">
    <TheTitle mb-6 text-xl>
      Izohlar {{ comments.length ? `(${comments.length})` : '' }}
    </TheTitle>

    <div v-if="user" mb-8>
      <form @submit.prevent="addComment">
        <div mt-1>
          <textarea
            v-model="comment"
            required
            class="comment-input"
            placeholder="Film haqida fikringizni yozing..."
            :disabled="isLoading"
            rows="3"
          />
        </div>
        <div mt-3 flex justify-end>
          <button
            type="submit"
            class="submit-btn"
            :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
            :disabled="isLoading || !comment.trim()"
          >
            <div v-if="isLoading" i-svg-spinners-270-ring mr-2 />
            <div v-else i-carbon-send mr-2 />
            Yuborish
          </button>
        </div>
      </form>
    </div>
    <div v-else class="auth-prompt">
      <div i-carbon-locked mb-2 text-2xl />
      <p mb-3>
        Izoh qoldirish uchun avval tizimga kiring
      </p>
      <TheAuthDialog />
    </div>

    <div v-if="comments.length" class="comments-list mt-5">
      <div
        v-for="item in comments"
        :key="item.id"
        class="comment-item"
      >
        <div class="comment-header">
          <div class="user-info">
            <div i-carbon-user-avatar text-xl class="avatar" />
            <span class="username">Foydalanuvchi</span>
          </div>
          <span class="timestamp">{{ getRelativeTime(item.created_at) }}</span>
          <div v-if="user && user.id === item.user_id" class="action-buttons">
            <button
              v-if="editingCommentId !== item.id"
              class="edit-btn"
              @click="startEditing(item)"
            >
              Tahrirlash
            </button>
            <button
              class="delete-btn"
              @click="deleteComment(item.id)"
            >
              O'chirish
            </button>
          </div>
        </div>
        <div v-if="editingCommentId === item.id" class="edit-form">
          <textarea
            v-model="editedComment"
            class="comment-input"
            rows="3"
            :disabled="isLoading"
          />
          <div class="edit-actions">
            <button
              class="cancel-btn"
              :disabled="isLoading"
              @click="editingCommentId = null"
            >
              Bekor qilish
            </button>
            <button
              class="save-btn"
              :disabled="isLoading || !editedComment.trim()"
              @click="editComment(item.id)"
            >
              <div v-if="isLoading" i-svg-spinners-270-ring mr-2 />
              Saqlash
            </button>
          </div>
        </div>
        <p v-else class="comment-text">
          {{ item.comment }}
        </p>
      </div>
    </div>
    <div v-else-if="!comments.length" class="empty-state">
      <div i-carbon-chat-off mb-3 text-4xl op-50 />
      <p>Hozircha izohlar yo'q. Birinchi bo'lib izoh qoldiring!</p>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  @apply transition-all duration-300;
}

.comment-input {
  @apply w-full px-4 py-3 bg-slate-gray rounded-lg border-1 border-gray-600
    focus:border-green focus:ring-1 focus:ring-green focus:outline-none
    transition duration-200 resize-y text-sm;
}

.submit-btn {
  @apply inline-flex items-center px-4 py-2 bg-green hover:bg-dark-green
    rounded-lg text-white text-sm transition duration-200
    disabled:opacity-50 disabled:cursor-not-allowed;
}

.auth-prompt {
  @apply text-center p-6 bg-slate-gray rounded-lg border-1 border-gray-700
    shadow-lg transition-all duration-300;
}

.comments-list {
  @apply space-y-4;
}

.comment-item {
  @apply p-4 bg-slate-gray rounded-lg border-1 border-gray-700
    transition-all duration-200 hover:border-gray-600;
}

.comment-header {
  @apply flex items-center justify-between mb-3;
}

.user-info {
  @apply flex items-center gap-2;
}

.avatar {
  @apply text-green;
}

.username {
  @apply font-medium text-sm;
}

.timestamp {
  @apply text-xs text-gray-400;
}

.comment-text {
  @apply text-gray-200 text-sm leading-relaxed whitespace-pre-wrap;
}

.empty-state {
  @apply text-center p-8 text-gray-400 bg-slate-gray rounded-lg
    border-1 border-gray-700;
}

.delete-btn {
  @apply text-red-500 hover:text-red-700 transition duration-200;
}

.action-buttons {
  @apply flex gap-2;
}

.edit-btn {
  @apply text-blue-400 hover:text-blue-500 transition duration-200;
}

.edit-form {
  @apply mt-2;
}

.edit-actions {
  @apply flex justify-end gap-2 mt-2;
}

.cancel-btn {
  @apply px-3 py-1 text-sm text-gray-400 hover:text-gray-200
    transition duration-200;
}

.save-btn {
  @apply inline-flex items-center px-3 py-1 bg-blue-500
    hover:bg-blue-600 rounded-lg text-white text-sm
    transition duration-200 disabled:opacity-50
    disabled:cursor-not-allowed;
}
</style>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { auth } = useSupabaseClient()

async function logout() {
  await auth.signOut()
  navigateTo('/')
}

onBeforeMount(logout)
</script>

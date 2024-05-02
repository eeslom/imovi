<script setup lang="ts">
const { auth } = useSupabaseClient()

async function logout() {
  await auth.signOut()
  navigateTo('/')
}

onBeforeMount(logout)
</script>

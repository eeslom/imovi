<script setup lang="ts">
const { auth } = useSupabaseClient()

onBeforeMount(async () => {
  await auth.signOut()
  navigateTo('/')
})
</script>

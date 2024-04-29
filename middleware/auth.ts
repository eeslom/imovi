export default defineNuxtRouteMiddleware(() => {
  const session = useSupabaseSession()

  if (!session.value)
    return navigateTo('/')
})

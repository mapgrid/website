<style global>
  /* purgecss start ignore */
  @tailwind base;
  /* purgecss end ignore */

  @tailwind components;
  @tailwind utilities;

  html, body {
    @apply h-full;
  }
</style>

<script>
    import router from 'page'
    import Analytics from '@mapgrid/elements/analytics/Component.svelte'

    import Home from './routes/Home.svelte'

    let page
    let params
    let path

    router(({ canonicalPath }, next) => {
        path = canonicalPath
        next()
    })
    router('/', () => page = Home)

    router.start()
</script>

<svelte:component this={page} params={params} />
<Analytics
    siteId="mapgrid"
    trackerUrl={process.env.ANALYTICS_ENDPOINT}
    path={path}
/>

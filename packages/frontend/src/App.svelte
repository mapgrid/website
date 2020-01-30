<style global>
  @tailwind base;
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
    siteId="demo"
    trackerUrl="https://analytics.mapgrid.workers.dev/"
    path={path}
/>

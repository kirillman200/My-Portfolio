import "./src/styles/global.css"

export const onClientEntry = () => {
  const root = document.getElementById("___gatsby")
  const loader = document.getElementById("___loader")

  if (root) root.style.display = "block"

  if (loader) {
    window.setTimeout(() => {
      loader.classList.add("pre-loader-done")
      window.setTimeout(() => {
        loader.style.display = "none"
      }, 500)
    }, 1000)
  }

  // Remove service workers and caches left by the retired offline plugin so
  // visitors do not remain pinned to stale portfolio or CMS content.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations()
        await Promise.all(
          registrations.map(registration => registration.unregister()),
        )

        if ("caches" in window) {
          const cacheNames = await window.caches.keys()
          await Promise.all(
            cacheNames
              .filter(name => /gatsby|workbox/i.test(name))
              .map(name => window.caches.delete(name)),
          )
        }
      } catch (error) {
        console.warn("Unable to clear the retired offline cache", error)
      }
    })
  }
}

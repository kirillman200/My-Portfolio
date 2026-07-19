export function toSafeExternalUrl(value) {
  if (typeof value !== "string" || !value.trim()) return null

  try {
    const url = new URL(value)
    return ["http:", "https:"].includes(url.protocol) ? url.href : null
  } catch {
    return null
  }
}

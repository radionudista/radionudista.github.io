// lib/metadataCache.ts
let cachedTitle: string | null = null;

export function getCachedMetadata() {
  return cachedTitle;
}

export function setCachedMetadata(title: string | null) {
  cachedTitle = title;
}

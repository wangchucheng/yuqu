export function prefetch(url) {
  const prefetcher = document.createElement("link");
  prefetcher.rel = "prefetch";
  prefetcher.href = url;
  document.head.appendChild(prefetcher);
}

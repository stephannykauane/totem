const files = import.meta.glob('./*.{webp,png,jpg,jpeg,svg,JPG,gif,mp4}', {
  eager: true,
  query: '?url',
  import: 'default',
})

// asset('image8.webp') -> URL final do arquivo
export function asset(name) {
  const url = files[`./${name}`]
  if (!url) console.warn(`Mídia não encontrada: ${name}`)
  return url
}

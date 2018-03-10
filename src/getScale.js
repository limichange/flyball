export default function getScale () {
  let i = 1
  const viewport = document.querySelector('meta[name="viewport"]')

  if (viewport) {
    const scale = viewport.content.match(/initial-scale=(\d+\.?\d*)/)
    scale && (i = scale[1])
  }

  return i
}

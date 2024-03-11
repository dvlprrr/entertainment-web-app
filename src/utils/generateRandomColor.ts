export function generateRandomColor() {
  const randomHue = Math.floor(Math.random() * 360)
  const randomSaturation = Math.floor(Math.random() * 50) + 50
  const randomLightness = Math.floor(Math.random() * 30) + 50

  return `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`
}

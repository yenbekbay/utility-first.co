import useFontFaceObserver from 'use-font-face-observer'

export default function Index() {
  const fontsLoaded = useFontFaceObserver([
    {family: 'Lucette'},
    {family: 'Dinish'},
  ])
  if (!fontsLoaded) {
    return null
  }
  return (
    <article className="prose h-screen p-4 prose-headings:font-display prose-headings:font-bold lg:prose-xl">
      <h1 className="mb-0 lowercase lg:mb-0">Utility First</h1>
      <p>A digital product studio in Almaty, Kazakhstan. Coming soon.</p>
    </article>
  )
}

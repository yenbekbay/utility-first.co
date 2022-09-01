import useFontFaceObserver from 'use-font-face-observer'

export default function Index() {
  const fontsLoaded = useFontFaceObserver([
    {family: 'Inria Serif'},
    {family: 'Panamera'},
  ])
  if (!fontsLoaded) {
    return null
  }
  return (
    <article className="container prose-2xl prose p-4 prose-headings:font-display prose-headings:font-normal">
      <h1>Utility First</h1>
      <p>A digital product studio in Almaty, Kazakhstan. Coming soon.</p>
    </article>
  )
}

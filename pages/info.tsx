import Layout from 'components/Layout'

export default function Info() {
  return (
    <Layout>
      <article className="prose max-w-md leading-tight md:prose-2xl md:leading-tight">
        <p>
          If you’re interested in any form of collaboration, please send us an
          email and we’ll get back shortly.
          <br />
          <a href="mailto:info@utility-first.co">info@utility-first.co</a>
        </p>
      </article>
    </Layout>
  )
}

import Layout from 'components/Layout'
import {UnderConstruction} from 'components/UnderConstruction'

export default function Info() {
  return (
    <Layout>
      <article className="prose">
        <UnderConstruction />

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

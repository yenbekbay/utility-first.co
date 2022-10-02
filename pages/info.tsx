import Layout from 'components/Layout'

export default function Info() {
  return (
    <Layout>
      <article className="prose py-16">
        <h2>About us</h2>

        <p>
          We’re a small team of design-oriented software developers with a
          strong understanding of user experience and product.
        </p>

        <p>What we can do:</p>

        <ul>
          <li>Architect an MVP.</li>
          <li>Consult on product discovery and strategy.</li>
          <li>Craft a web-based digital experience.</li>
          <li>Launch a mobile (iOS or Android) app.</li>
          <li>Replatform your business logic and internal tools.</li>
        </ul>

        <h2>Our process</h2>

        <p>
          We don’t believe in cookie-cutter approaches. We understand that every
          company is at a different stage when they come to us, and so we work
          with you to create a plan that will help you achieve your goals. We
          believe that the best way to solve problems is to actually work on
          them, not waste time on unproductive routines and corporate
          bureaucracy.
        </p>

        <h2>Contact</h2>

        <p>
          Have a project you’d like to work on with us? Interested in joining
          the team? We’re always open to chat about anything. Please send us an
          email at{' '}
          <a href="mailto:hello@utility-first.co">hello@utility-first.co</a>.
        </p>
      </article>
    </Layout>
  )
}

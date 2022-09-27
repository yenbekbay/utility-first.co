import Layout from 'components/Layout'
import type {Project} from 'contentlayer/generated'
import {allProjects} from 'contentlayer/generated'
import {compareDesc, format, parseISO} from 'date-fns'
import Link from 'next/link'

export function getStaticProps() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return {props: {projects}}
}

export default function Index({projects}: {projects: Project[]}) {
  return (
    <Layout>
      <article className="prose max-w-md leading-tight md:prose-2xl md:leading-tight">
        <p>
          Utility First is a{' '}
          <span className="font-serif text-[1.1em] italic">design-driven</span>{' '}
          digital product studio located in Almaty, Kazakhstan.
        </p>
      </article>

      <div className="grid grid-cols-1 gap-2 py-8">
        {projects.map((project, idx) => (
          <div className="prose max-w-md leading-tight" key={idx}>
            <time dateTime={project.date} className="text-xs text-gray-500">
              {format(parseISO(project.date), 'LLLL d, yyyy')}
            </time>

            <Link
              href={project.url}
              className="block text-lg text-content no-underline hover:underline active:underline">
              {project.title}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

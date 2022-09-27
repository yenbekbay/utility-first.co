import Layout from 'components/Layout'
import type {Project} from 'contentlayer/generated'
import {allProjects} from 'contentlayer/generated'
import {format, parseISO} from 'date-fns'
import type {GetStaticPropsContext} from 'next'
import Head from 'next/head'
import Link from 'next/link'

export function getStaticPaths() {
  const paths = allProjects.map((project) => project.url)
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({params}: GetStaticPropsContext) {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params?.slug,
  )
  return {
    props: {
      project,
    },
  }
}

export default function ProjectLayout({project}: {project: Project}) {
  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>

      <article className="prose max-w-md leading-tight md:prose-2xl md:leading-tight">
        <h1>{project.title}</h1>

        <time dateTime={project.date} className="text-sm text-gray-500">
          {format(parseISO(project.date), 'LLLL d, yyyy')}
        </time>

        <div dangerouslySetInnerHTML={{__html: project.body.html}} />
      </article>
    </Layout>
  )
}

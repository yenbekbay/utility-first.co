import Layout from 'components/Layout'
import {allProjects} from 'contentlayer/generated'
import type {GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Head from 'next/head'

export function getStaticPaths() {
  const paths = allProjects.map((p) => `/work/${p.slug}`)
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({params}: GetStaticPropsContext) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params?.slug,
  )!
  return {
    props: {project},
  }
}

export default function ProjectLayout({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(project.body.code)
  return (
    <Layout>
      <Head>
        <title>{project.title} | Utility First</title>
      </Head>

      <article className="prose max-w-md leading-tight">
        <h1>{project.title}</h1>

        <time dateTime={project.year} className="text-sm text-gray-500">
          {project.year}
        </time>

        <MDXContent />
      </article>
    </Layout>
  )
}
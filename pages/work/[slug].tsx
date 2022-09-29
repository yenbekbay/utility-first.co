import Layout from 'components/Layout'
import {allProjects} from 'contentlayer/generated'
import {EnhancedImage} from 'lib/components/EnhancedImage'
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
  const project = allProjects.find((p) => p.slug === params?.slug)!
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

      <article className="prose prose-td:pr-12 prose-td:align-top prose-td:leading-normal prose-td:text-muted first:prose-td:text-content">
        <h1>{project.title}</h1>
        <table>
          <tr>
            <td>Year</td>
            <td>{project.year}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>{project.role.join(', ')}</td>
          </tr>
          {project.website && (
            <tr>
              <td>Website</td>
              <td>
                <a href={project.website} target="_blank" rel="noreferrer">
                  {project.website.replace(/^https?:\/\//, '')}
                </a>
              </td>
            </tr>
          )}
        </table>
        <MDXContent components={{EnhancedImage}} />
      </article>
    </Layout>
  )
}

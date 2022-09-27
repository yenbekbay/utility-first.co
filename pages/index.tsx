import Layout from 'components/Layout'
import {allProjects} from 'contentlayer/generated'
import type {InferGetStaticPropsType} from 'next'
import Image from 'next/future/image'
import Link from 'next/link'
import {getPlaiceholder} from 'plaiceholder'

export async function getStaticProps() {
  const projects = await Promise.all(
    allProjects.map(async (p) => {
      const {base64, img} = await getPlaiceholder(p.coverImageSrc, {size: 8})
      return {
        ...p,
        coverImageSrc: {
          ...img,
          blurDataURL: base64,
        },
      }
    }),
  )
  return {
    props: {projects},
  }
}

export default function Index({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <article className="prose max-w-3xl">
        <h1>
          Utility First is a <em>design-driven</em> digital product studio based
          in Almaty, Kazakhstan.
        </h1>
      </article>

      <div className="grid grid-cols-1 gap-2 py-8 md:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="group">
            <div className="prose">
              <Image
                src={p.coverImageSrc}
                alt={`Thumbnail for ${p.title}`}
                placeholder="blur"
                className="mb-2 max-w-full rounded-lg"
              />

              <time dateTime={p.year} className="block text-xs text-gray-500">
                {p.year}
              </time>

              <span className="block text-lg leading-tight group-hover:underline group-active:underline">
                {p.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

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
      <article className="prose max-w-md leading-tight md:prose-2xl md:leading-tight">
        <p>
          Utility First is a{' '}
          <span className="font-serif text-[1.125em] italic">
            design-driven
          </span>{' '}
          digital product studio located in Almaty, Kazakhstan.
        </p>
      </article>

      <div className="grid grid-cols-1 gap-2 py-8">
        {projects.map((p, idx) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group block text-lg text-content">
            <div className="prose max-w-md leading-tight">
              <Image
                src={p.coverImageSrc}
                alt={`Thumbnail for ${p.title}`}
                placeholder="blur"
                className="mb-2 w-64 max-w-full rounded-lg"
              />

              <time dateTime={p.year} className="text-xs text-gray-500">
                {p.year}
              </time>

              <span className="block text-lg group-hover:underline group-active:underline">
                {p.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

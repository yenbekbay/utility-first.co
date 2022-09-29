import Layout from 'components/Layout'
import {allProjects} from 'contentlayer/generated'
import {EnhancedImage} from 'lib/components/EnhancedImage'
import type {InferGetStaticPropsType} from 'next'
import Link from 'next/link'
import {getPlaiceholder} from 'plaiceholder'

const SORT_ORDER = ['alka', 'heritage-novel', 'tabs']

export async function getStaticProps() {
  const projects = await Promise.all(
    allProjects
      .sort(
        (a, b) =>
          (SORT_ORDER.indexOf(a.slug) ?? Number.POSITIVE_INFINITY) -
          (SORT_ORDER.indexOf(b.slug) ?? Number.POSITIVE_INFINITY),
      )
      .map(async (p) => {
        const {img: src, svg} = await getPlaiceholder(p.coverImageSrc, {
          size: 8,
        })
        return {
          ...p,
          coverImageSrc: src,
          coverImageSvg: svg,
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
      <article className="prose max-w-[80ch]">
        <h1>
          Utility First is a <em>design-driven</em> technology studio based in
          Almaty, Kazakhstan.
        </h1>
      </article>

      <section className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 md:gap-[2rem_0.5rem]">
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="group">
            <div className="prose prose-no-spacing">
              <EnhancedImage
                src={p.coverImageSrc}
                svg={p.coverImageSvg}
                alt={`Thumbnail for ${p.title}`}
                className="mb-2 rounded-lg"
              />

              <div>
                <small className="text-muted">{p.year}</small>
              </div>

              <div>
                <span className="text-lg leading-tight group-hover:underline group-active:underline">
                  {p.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

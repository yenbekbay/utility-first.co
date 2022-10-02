import Layout from 'components/Layout'
import {allProjects} from 'contentlayer/generated'
import {EnhancedImage} from 'lib/components/EnhancedImage'
import type {InferGetStaticPropsType} from 'next'
import Image from 'next/future/image'
import Link from 'next/link'
import {getPlaiceholder} from 'plaiceholder'

const SORT_ORDER = [
  'alka',
  'tabs',
  'heritage-novel',
  'okauto',
  'lavka',
  'seansy',
]

export async function getStaticProps() {
  const avatarAyanYenbekbay = await getPlaiceholder(
    '/images/avatar-ayan-yenbekbay.jpeg',
  )
  const avatars = {
    ayanYenbekbay: avatarAyanYenbekbay.img,
  }
  const projects = await Promise.all(
    allProjects
      .sort((a, b) => {
        let aIndex = SORT_ORDER.indexOf(a.slug)
        let bIndex = SORT_ORDER.indexOf(b.slug)
        if (aIndex === -1) {
          aIndex = Number.POSITIVE_INFINITY
        }
        if (bIndex === -1) {
          bIndex = Number.POSITIVE_INFINITY
        }
        return aIndex - bIndex
      })
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
    props: {
      avatars,
      projects,
    },
  }
}

export default function Index({
  avatars,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="prose-sm prose prose-no-spacing leading-none md:space-y-1">
        <p>
          <strong className="text-[70%]">Availability</strong>
          <br />
          <small className="text-[70%]">
            We’re open for business and new collaborations from{' '}
            <span className="whitespace-nowrap">Nov 2022</span>.{' '}
            <a
              href="mailto:hello@utility-first.co"
              className="whitespace-nowrap">
              Get in touch
            </a>
            .
          </small>
        </p>
      </div>

      <div className="space-y-8 py-16">
        <article className="prose max-w-[80ch]">
          <h1>
            Utility First is a{' '}
            <em className="whitespace-nowrap">design-driven</em> technology
            company that helps start-ups build great products.
          </h1>

          <p>
            Based in Almaty, Kazakhstan and founded by{' '}
            <span className="whitespace-nowrap">
              <Image
                src={avatars.ayanYenbekbay}
                alt="Ayan Yenbekbay"
                className="my-0 inline-block h-[1em] w-auto translate-y-[-0.1em] rounded-sm"
              />{' '}
              Ayan Yenbekbay
            </span>
            , we work collaboratively with clients across the globe to identify
            their business goals and launch simple, intuitive experiences.
          </p>
        </article>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[2rem_0.5rem]">
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
                  <span className="text-lg leading-tight decoration-primary underline-offset-2 group-hover:underline group-active:underline md:underline-offset-4">
                    {p.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  )
}

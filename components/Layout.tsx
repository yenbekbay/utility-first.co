import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {intlFormat} from 'date-fns'
import {ActiveLink} from 'lib/components/ActiveLink'
import Link from 'next/link'
import React from 'react'
import useFontFaceObserver from 'use-font-face-observer'

export default function Layout({children}: {children: React.ReactNode}) {
  const fontsLoaded = useFontFaceObserver([
    {family: 'Manrope'},
    {family: 'Lucette'},
    {family: 'Dinish'},
  ])
  if (!fontsLoaded) {
    return null
  }
  return (
    <>
      <header className="sticky top-0 z-10 grid grid-cols-1 items-center gap-1 bg-background p-2 md:grid-cols-2 md:gap-2">
        <div>
          <Link
            href="/"
            className="font-display text-xl font-bold lowercase leading-tight text-primary">
            Utility First
          </Link>
        </div>

        <NavigationMenu.Root>
          <NavigationMenu.List className="grid auto-cols-min grid-flow-col gap-2 md:justify-end">
            {[
              {href: '/', label: 'Work'},
              {href: '/info', label: 'Information'},
            ].map((l) => (
              <NavigationMenu.Item key={l.href}>
                <NavigationMenu.Link asChild>
                  <ActiveLink
                    href={l.href}
                    className="text-muted hover:text-content hover:underline active:underline link-exact-active:text-content">
                    {l.label}
                  </ActiveLink>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>

      <main className="px-2 py-16">{children}</main>

      <footer className="prose p-2 prose-td:py-1">
        <table>
          <tbody>
            <tr>
              <td className="whitespace-nowrap">Local time</td>
              <td>
                <LocalTime />
              </td>
            </tr>

            <tr>
              <td>Credits</td>
              <td>
                Type set in Mikhail Sharanda’s{' '}
                <a
                  href="https://www.gent.media/manrope"
                  target="_blank"
                  rel="noreferrer">
                  Manrope
                </a>{' '}
                and Yann Linguinou’s{' '}
                <a
                  href="https://yannlinguinou.com/LUCETTE-1"
                  target="_blank"
                  rel="noreferrer">
                  Lucette
                </a>
                .<br />
                Hosted on{' '}
                <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                  Vercel
                </a>
                .
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap">Follow us</td>
              <td>
                <a
                  href="https://twitter.com/utilfirst"
                  target="_blank"
                  rel="noreferrer">
                  Twitter
                </a>
                <br />
                <a
                  href="https://instagram.com/utilfirst"
                  target="_blank"
                  rel="noreferrer">
                  Instagram
                </a>
                <br />
                <a
                  href="https://github.com/utility-first"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mb-0">©2022</p>
        <p className="mt-0 text-muted">All rights reserved</p>
      </footer>
    </>
  )
}

function LocalTime() {
  const [time, setTime] = React.useState(Date.now())
  React.useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <span>
      ALA{' '}
      {intlFormat(time, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Almaty',
      })}
    </span>
  )
}

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
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
                    className="text-gray-500 hover:text-content hover:underline active:underline link-exact-active:text-content">
                    {l.label}
                  </ActiveLink>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>

      <main className="px-2 py-16">{children}</main>

      <footer className="prose p-2">
        <p className="mb-0">©2022</p>
        <p className="mt-0 text-gray-500">All rights reserved</p>
      </footer>
    </>
  )
}

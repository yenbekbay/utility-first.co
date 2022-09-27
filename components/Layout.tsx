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
      <header className="sticky top-0 grid grid-cols-1 items-center bg-background p-2 md:grid-cols-2 md:gap-2">
        <div>
          <Link
            href="/"
            className="font-display text-xl font-bold lowercase leading-tight text-primary">
            Utility First
          </Link>
        </div>

        <NavigationMenu.Root>
          <NavigationMenu.List className="grid auto-cols-min grid-flow-col gap-2 md:justify-end">
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <ActiveLink
                  href="/"
                  className="hover:underline active:underline link-exact-active:underline">
                  Work
                </ActiveLink>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <ActiveLink
                  href="/info"
                  className="hover:underline active:underline link-exact-active:underline">
                  Information
                </ActiveLink>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>

      <main className="px-2 py-16">{children}</main>

      <footer className="prose p-2 leading-tight">
        <p>
          <span className="text-sm">©2022</span>
          <br />
          <span className="text-sm text-gray-500">All rights reserved</span>
        </p>
      </footer>
    </>
  )
}

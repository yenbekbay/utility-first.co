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
      <header className="grid grid-cols-1 gap-4 border-b border-b-gray-500/20 p-2 md:grid-cols-2">
        <Link
          href="/"
          className="translate-y-[-0.05em] font-display text-2xl font-bold lowercase leading-none text-primary">
          Utility First
        </Link>

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

      <main className="px-2 pt-16 pb-2">{children}</main>
    </>
  )
}

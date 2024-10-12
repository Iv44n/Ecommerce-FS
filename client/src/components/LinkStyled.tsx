'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LinkStyled({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()

  const classLink = pathname === href
    ? 'underline font-medium'
    : ''

  return <Link href={href} className={classLink}>{children}</Link>
}

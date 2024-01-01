import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'


export const metadata: Metadata = {
  title: 'About me | svnoliveira',
}

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  )
}

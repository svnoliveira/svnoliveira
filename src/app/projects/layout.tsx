import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'


export const metadata: Metadata = {
  title: 'Projects | svnoliveira',
}

export default function ProjectsLayout({
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

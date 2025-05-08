import { ReactNode } from 'react'

interface LayoutProps { children: ReactNode }
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 text-xl font-semibold">VK Concept</header>
      <main className="flex-1">{children}</main>
      <footer className="p-4 text-center text-sm">© {new Date().getFullYear()} VK Concept</footer>
    </div>
  )
}

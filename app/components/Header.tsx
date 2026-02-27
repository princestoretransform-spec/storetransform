'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)
  const [logoError, setLogoError] = useState(false)

  // Option A: local logo in /public/logo.png
  // const [logoSrc, setLogoSrc] = useState('/logo.png')

  // Option B: remote logo (allowed in next.config.ts)
  const [logoSrc, setLogoSrc] = useState('https://storetransform.com/wp-content/uploads/2022/06/store-logo.png')

  const nav = [
    { label: 'HOME', href: '/' },
    {
      label: 'ABOUT US',
      children: [
        { label: 'Company', href: '/about' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      label: 'OUR SERVICES',
      children: [
        { label: 'IT Consultation', href: '#services' },
        { label: 'AI‑Powered Services', href: '#services' },
        { label: 'Web Development', href: '#services' },
        { label: 'Digital Marketing', href: '#services' },
        { label: 'App Development', href: '#services' },
        { label: 'UI/UX Design', href: '#services' },
      ],
    },
    {
      label: 'HIRE DEVELOPERS',
      children: [
        { label: 'React', href: '#contact' },
        { label: 'Next.js', href: '#contact' },
        { label: 'Node.js', href: '#contact' },
        { label: 'Python', href: '#contact' },
      ],
    },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT US', href: '#contact' },
  ]

  const isActive = (href?: string) =>
    href ? (href === '/' ? pathname === '/' : pathname.startsWith(href.replace('#', ''))) : false

  // Lock body scroll when drawer open
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = open ? 'hidden' : original || ''
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 border-b border-neutral-200 bg-neutral-100/90 backdrop-blur ${mont.className}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6 md:py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {!logoError ? (
            <Image
              src={logoSrc}
              alt="Store Transform"
              width={140}
              height={36}
              priority
              className="h-8 w-auto md:h-10"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="leading-none">
              <div className="text-base md:text-lg font-semibold tracking-widest text-neutral-800">STORE</div>
              <div className="mt-0.5 inline-block rounded bg-[#f2623e] px-1.5 py-0.5 text-[9px] md:text-[10px] font-semibold text-white">
                TRANSFORM
              </div>
            </div>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) =>
            !item.children ? (
              <div key={item.label} className="relative">
                <Link
                  href={item.href || '#'}
                  className={`text-[12px] md:text-[13px] tracking-wide ${
                    isActive(item.href) ? 'text-[#f2623e]' : 'text-neutral-800 hover:text-[#f2623e]'
                  }`}
                >
                  {item.label}
                </Link>
                {isActive(item.href) && <div className="absolute -bottom-2 left-0 h-0.5 w-10 bg-[#f2623e]" />}
              </div>
            ) : (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopOpen(item.label)}
                onMouseLeave={() => setDesktopOpen(null)}
              >
                <button
                  onClick={() => setDesktopOpen(desktopOpen === item.label ? null : item.label)}
                  className="flex items-center gap-1 text-[12px] md:text-[13px] tracking-wide text-neutral-800 hover:text-[#f2623e]"
                  aria-haspopup="menu"
                  aria-expanded={desktopOpen === item.label}
                >
                  {item.label}
                  <span className="text-xs">▾</span>
                </button>
                {desktopOpen === item.label && (
                  <div className="absolute left-0 top-full z-[100] mt-3 w-56 rounded-md border border-neutral-200 bg-white p-2 shadow-lg">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block rounded px-3 py-2 text-[13px] text-neutral-800 hover:bg-neutral-100 hover:text-[#f2623e]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </nav>

        {/* Mobile trigger */}
        <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden">
          <div className="flex w-7 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-[#f2623e]" />
            <span className="h-0.5 w-full bg-[#f2623e]" />
            <span className="h-0.5 w-4 bg-[#f2623e]" />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 transition ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/30" />
        <div
          className={`absolute right-0 top-0 h-screen w-full max-w-full transform bg-neutral-100 shadow-xl transition overflow-y-auto sm:w-[22rem] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-gray-500" />
              <span className="text-sm font-semibold">STORE TRANSFORM</span>
            </div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-2xl text-[#f2623e]">
              ×
            </button>
          </div>
          <div className="px-6 py-4">
            <ul className="space-y-4 text-[15px]">
              {nav.map((item) =>
                !item.children ? (
                  <li key={item.label}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={item.href || '#'}
                      className={`block ${isActive(item.href) ? 'text-[#f2623e]' : 'text-neutral-900'}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs">▾</span>
                    </button>
                    <div className={`mt-2 space-y-2 pl-3 ${openDropdown === item.label ? 'block' : 'hidden'}`}>
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          onClick={() => setOpen(false)}
                          href={c.href}
                          className="block text-[14px] text-neutral-700 hover:text-[#f2623e]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}


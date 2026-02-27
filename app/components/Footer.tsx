import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-neutral-950 py-12 text-sm text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-base font-semibold text-white">
              StoreTransform Clone
            </span>
          </div>
          <p className="max-w-xs text-gray-400">
            AI‑assisted web, app, and marketing solutions tailored for growth.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Services</h4>
          <ul className="space-y-2">
            <li><Link href="#services" className="hover:text-white">IT Consultation</Link></li>
            <li><Link href="#services" className="hover:text-white">AI‑Powered Solutions</Link></li>
            <li><Link href="#services" className="hover:text-white">Web Development</Link></li>
            <li><Link href="#services" className="hover:text-white">Digital Marketing</Link></li>
            <li><Link href="#services" className="hover:text-white">App Development</Link></li>
            <li><Link href="#services" className="hover:text-white">UI/UX Design</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="#why" className="hover:text-white">Why Choose Us</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div id="contact">
          <h4 className="mb-3 font-semibold text-white">Get in Touch</h4>
          <p className="mb-3 text-gray-400">Have a project in mind? Let’s talk.</p>
          <a
            href="mailto:hello@example.com"
            className="inline-block rounded-md bg-emerald-500 px-4 py-2 font-medium text-black hover:bg-emerald-400"
          >
            Email Us
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6">
        <div className="h-px w-full bg-neutral-800" />
        <div className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-gray-500 md:flex-row">
          <p>© 2026 Your Company. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

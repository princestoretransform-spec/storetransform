import Image from "next/image";
import Link from "next/link";

const experts = [
  {
    label: "AI Expert",
    src: "https://storetransform.com/wp-content/uploads/2025/12/Frame-404-e1758104761909.webp",
  },
  {
    label: "WordPress Expert",
    src: "https://storetransform.com/wp-content/uploads/2025/12/st-wodpres.webp",
  },
  {
    label: "Shopify Expert",
    src: "https://storetransform.com/wp-content/uploads/2025/12/shopify.webp",
  },
  {
    label: "Magento Expert",
    src: "https://storetransform.com/wp-content/uploads/2025/12/st-mageto.webp",
  },
  {
    label: "SEO Expert",
    src: "https://storetransform.com/wp-content/uploads/2025/12/seo1.webp",
  },
  {
    label: "PPC Expert",
    src: "https://storetransform.com/wp-content/uploads/2025/12/ppc.webp",
  },
];

export default function HireExpertsSection() {
  return (
    <section id="hire" className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">Hire Our Experts</h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-[15px] text-gray-300">
          Our team is a collective of specialized minds, each a leader in their field. We bring deep knowledge
          and proven expertise to every project, ensuring your success.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((e) => (
            <Link
              key={e.label}
              href="#contact"
              className="group flex items-center gap-3 rounded-2xl bg-white p-4 text-neutral-900 shadow-md ring-1 ring-neutral-200 transition hover:shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 ring-1 ring-neutral-200">
                <Image
                  src={e.src}
                  alt={e.label}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                  priority={e.label === "AI Expert"} // top-left item eager-load
                />
              </span>
              <span className="text-[15px] font-semibold">{e.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
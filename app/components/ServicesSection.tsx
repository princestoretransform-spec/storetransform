import Link from "next/link";

const services = [
  {
    title: "IT Consultation",
    desc:
      "Navigate the complex world of technology with our expert guidance. We help you create a clear, future‑proof strategy that aligns with your business goals.",
    href: "#",
  },
  {
    title: "AI‑Powered Services",
    desc:
      "Gain a competitive advantage with intelligent solutions. We leverage artificial intelligence to automate processes and turn your data into actionable insights.",
    href: "#",
  },
  {
    title: "Web Development",
    desc:
      "Build a powerful and secure digital presence from the ground up. Our custom websites are designed for performance, accessibility, and engagement.",
    href: "#",
  },
  {
    title: "Digital Marketing",
    desc:
      "Amplify your brand and reach your audience in the digital space. We create data‑driven strategies to boost your visibility and business growth.",
    href: "#",
  },
  {
    title: "App Development",
    desc:
      "Bring your innovative ideas to life on mobile devices. We design and build custom applications for iOS and Android that are intuitive and highly functional.",
    href: "#",
  },
  {
    title: "UI/UX Design",
    desc:
      "Create a user‑centric experience that is both beautiful and effective. We craft captivating interfaces and smooth user journeys to drive conversion and loyalty.",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
          Services We Provide
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-neutral-600">
          Ready to turn your vision into a reality? Explore our core services and see how we can help you innovate.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-neutral-200 md:p-8"
            >
              <span
                aria-hidden
                className={`absolute left-0 top-4 bottom-4 w-[10px] rounded-full ${
                  i % 2 === 0 ? "bg-[#f2623e]" : "bg-black"
                }`}
              />
              <h3 className="text-2xl font-extrabold text-neutral-900">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-neutral-700">{s.desc}</p>
              <Link
                href={s.href}
                className="mt-5 inline-block text-[15px] font-medium text-[#f2623e] hover:opacity-90"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
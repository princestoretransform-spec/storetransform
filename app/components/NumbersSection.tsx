// app/components/NumbersSection.tsx
import Link from "next/link";

const stats = [
  { value: "13+", label: "Years of Experience", highlight: true },
  { value: "52+", label: "Team Members" },
  { value: "32+", label: "Countries Served" },
  { value: "1358+", label: "Projects Delivered" },
];

export default function NumbersSection() {
  return (
    <section className="bg-neutral-800 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-extrabold md:text-5xl">
          Numbers Speak for Themselves!
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-gray-200">
          With a proven track record and a team of experts, we are the architects of your digital success.
          We harness the power of AI to supercharge our services, helping businesses achieve unprecedented
          growth—and now it’s your turn to witness the magic.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={
                s.highlight
                  ? "rounded-2xl bg-[#f2623e] p-8 text-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  : "rounded-2xl bg-white p-8 text-center text-neutral-900 ring-1 ring-neutral-200 shadow"
              }
            >
              <div className={s.highlight ? "text-5xl font-extrabold" : "text-5xl font-extrabold"}>
                {s.value}
              </div>
              <div className={s.highlight ? "mt-2 text-sm font-medium text-white/90" : "mt-2 text-sm font-medium text-neutral-700"}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#contact"
            className="rounded-lg bg-[#f2623e] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#e45834]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
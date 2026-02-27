import Image from "next/image";

export default function TailoredServices() {
  return (
    <section id="tailored" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-neutral-900">Transform Your Business with..</h2>
          <h3 className="mt-1 text-3xl font-extrabold text-[#f2623e]">Our Tailored Services</h3>
          <p className="mt-5 text-[15px] leading-7 text-neutral-700">
            At Store Transform, we provide more than just digital services—we provide a competitive edge through the power of AI. We deliver 360° digital solutions from web design and development to marketing, tailored to your unique needs and optimized for maximum performance.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-neutral-700">
            With years of experience working with leading brands, our holistic, AI‑driven approach creates impactful online presences that drive sales and enhance brand visibility with unmatched efficiency.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
         
          <div className="col-span-2 overflow-hidden rounded-xl">
            <Image
              src="https://storetransform.com/wp-content/uploads/2025/12/Group-1.webp"
              alt="Digital marketing overview"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
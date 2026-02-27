import Image from "next/image";

const logos = [
  "https://storetransform.com/wp-content/uploads/2025/12/whychooserighting.webp", // sprite or collage
  // If you later want six separate logos, replace with 6 URLs and render them in a grid.
];

export default function WhyChooseRightSection() {
  return (
    <section id="why" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <h2 className="text-3xl font-extrabold text-neutral-900">
            Why Choose <span className="text-[#f2623e]">Store Transform?</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-neutral-700">
            We’re your all‑in‑one business partner, offering a complete suite of services from
            design to development and marketing with the power of AI. We eliminate the hassle of
            juggling multiple agencies by providing a 360‑degree solution under one roof. Our
            mission is to transform your business by building custom, innovative solutions that
            drive real, measurable success.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-neutral-700">
            Our team of experts is dedicated to a results‑driven approach. We leverage AI‑powered
            services to enhance our strategies, creating smarter campaigns and more personalized
            user experiences. By partnering with us, you gain a team committed to your vision,
            focused on building a robust and scalable foundation for your business’s future.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-neutral-700">
            We focus on helping you achieve business goals, ensuring our partnership is not just a
            service but a strategic advantage for your business. Let us handle the complexities so
            you can focus on what you do best: running your business.
          </p>
        </div>

        {/* Right grid (single collage image now, easy to swap to 6 items later) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {logos.map((src) => (
            <div
              key={src}
              className="col-span-1 overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-neutral-200 shadow"
            >
              <Image
                src={src}
                alt="Badges and partner logos"
                width={800}
                height={600}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client'
import Link from "next/link";
import { useState } from "react";

type Tool = { name: string; href: string; logo?: string };

const tools: Tool[] = [
  { name: "OpenAI", href: "https://openai.com", logo: "https://vectorlogo.zone/logos/openai/openai-icon.svg" },
  { name: "Hugging Face", href: "https://huggingface.co", logo: "https://vectorlogo.zone/logos/huggingface/huggingface-icon.svg" },
  { name: "TensorFlow", href: "https://www.tensorflow.org", logo: "https://vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
  { name: "Cursor", href: "https://www.cursor.com", logo: "https://www.cursor.com/favicon-196.png" },
  { name: "Lovable", href: "https://lovable.dev", logo: "https://lovable.dev/favicon-196.png" },
  { name: "Make", href: "https://www.make.com", logo: "https://www.make.com/apple-touch-icon.png" },
];

function Badge({ name, href, logo }: Tool) {
  const [error, setError] = useState(false);
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-neutral-900 ring-1 ring-neutral-200 shadow hover:ring-[#f2623e] hover:shadow-md"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-50 ring-1 ring-neutral-200">
        {!error && logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} alt={name} className="h-6 w-6 object-contain" onError={() => setError(true)} loading="lazy" />
        ) : (
          <span className="text-xs font-semibold">{name[0]}</span>
        )}
      </span>
      <span className="text-[15px] font-semibold">{name}</span>
    </Link>
  );
}

export default function AIModelsSection() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">AI Models We Work</h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-[15px] text-neutral-600">
          Our team builds innovative products that solve real‑world problems. Partner with us to leverage
          solutions that are scalable, reliable, and built to evolve with your business.
        </p>

        <div className="mt-8">
          <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible">
            {tools.map((t) => (
              <Badge key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

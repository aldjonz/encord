import Logo from "@/components/ui/Logo";
import { components } from "@/slices";
import { createClient } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import Image from "next/image";

export default async function Home() {
  const client = createClient("encord-technical-challenge");

  const page = await client.getByUID("landing_page", "landing-page");

  const { slices } = page.data;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-gray-100 items-center justify-items-center min-h-screen max-w-screen pb-20  scroll-smooth font-[family-name:var(--font-geist-sans)]">
      <nav className="flex items-center justify-between bg-white w-full h-16 sticky top-0 z-50 lg:px-56 px-6">
        <Logo client={client} />
        <div className="flex items-center gap-4">
          <a href="https://github.com/aldjonz/encord" target="_blank" rel="noopener noreferrer" className="text-sm">GitHub</a>
          <a href="https://encord-technical-challenge.prismic.io/builder/working" target="_blank" rel="noopener noreferrer" className="text-sm">Prismic</a>
        </div>
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SliceZone slices={slices} components={components} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/aldjonz/encord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://encord-technical-challenge.prismic.io/builder/working"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Prismic
        </a>
      </footer>
    </div>
  );
}

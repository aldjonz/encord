import Logo from "@/components/ui/Logo";
import { components } from "@/slices";
import { createClient } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient("encord-technical-challenge");

  const page = await client.getByUID("landing_page", "landing-page");
  const navigation = await client.getSingle("global_navigation");

  const { slices } = page.data;
  const { nav_link } = navigation.data;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-gray-100 items-center justify-items-center min-h-screen max-w-screen pb-10  scroll-smooth font-[family-name:var(--font-geist-sans)]">
      <nav className="flex items-center justify-between bg-white w-full h-16 sticky top-0 z-50 lg:px-56 px-6">
        <Logo client={client} />
        <div className="flex items-center gap-4">
          {nav_link.map((link) => (
            <PrismicNextLink key={link.key} field={link} />
          ))}
        </div>
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-8">
        <SliceZone slices={slices} components={components} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-10">
        {nav_link.map((link) => (
          <PrismicNextLink key={link.key} field={link} />
        ))}
      </footer>
    </div>
  );
}

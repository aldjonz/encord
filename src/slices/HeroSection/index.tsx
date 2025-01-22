import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      id="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-screen bg-[#594df6] relative"
    >
      <div className="w-full h-full relative">
        <PrismicNextImage field={slice.primary.background_image} className="object-cover w-full h-full" />
      </div>
      <div 
        className="absolute z-10 w-10/12 h-full top-0 flex flex-col justify-center px-10 gap-4"
      >
        <h1 className="text-white text-6xl font-bold">{slice.primary.heading}</h1>
        <p className="text-white text-2xl">{slice.primary.subheading}</p>
        <PrismicNextLink field={slice.primary.cta_link} className="bg-white text-black px-4 py-2 rounded-xl w-fit" />
      </div>
    </section>
  );
};

export default HeroSection;

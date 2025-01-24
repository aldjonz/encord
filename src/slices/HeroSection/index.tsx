import { CtaButton, Heading, Subheading } from "@/components/ui";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      id="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-screen  relative"
    >
      <div className="w-full h-full relative">
        <PrismicNextImage field={slice.primary.background_image} className="object-cover w-full h-full" />
      </div>
      <div 
        className="absolute z-10 w-11/12 md:w-10/12 h-full top-0 flex flex-col left-1/2 -translate-x-1/2 justify-center pb-12 gap-4"
      >
        <Heading>{slice.primary.heading}</Heading>
        <Subheading>{slice.primary.subheading}</Subheading>
        <CtaButton link={slice.primary.cta_link} />
      </div>
    </section>
  );
};

export default HeroSection;

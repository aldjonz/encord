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
      className="w-full min-h-screen relative"
    >
      <div className="w-full min-h-screen relative flex items-center">
        <PrismicNextImage 
          field={slice.primary.background_image} 
          loading="eager" 
          priority
          sizes="100vw"
        />
      </div>
      <div 
        className="absolute z-10 w-full h-full top-0 flex flex-col left-1/2 -translate-x-1/2 justify-center pb-12 gap-4 lg:px-56 px-8"
      >
        <Heading>{slice.primary.heading}</Heading>
        <Subheading>{slice.primary.subheading}</Subheading>
        <CtaButton link={slice.primary.cta_link} />
      </div>
    </section>
  );
};

export default HeroSection;

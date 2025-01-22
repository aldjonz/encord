import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection = ({ slice }: CtaSectionProps): JSX.Element => {
  return (
    <section
      id="cta"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-screen bg-white"
    >
      <div className="w-full h-full flex flex-col justify-center items-center  gap-4 text-center">
        <h1 className="text-6xl font-bold">{slice.primary.heading}</h1>
        <p className="text-2xl">{slice.primary.subheading}</p>
        <PrismicNextLink field={slice.primary.cta_link} className="bg-[#594df6] text-black px-4 py-2 rounded-xl w-fit" />
      </div>
    </section>
  );
};

export default CtaSection;

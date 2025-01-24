import { CtaButton, Heading } from "@/components/ui";
import Subheading from "@/components/ui/Subheading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection = ({ slice }: CtaSectionProps): JSX.Element => {
  return (
    <section
      id="cta"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-screen"
    >
      <div className="w-full h-full flex flex-col justify-center items-center lg:px-48 px-8 gap-8 text-center">
        <Heading>{slice.primary.heading}</Heading>
        <Subheading>{slice.primary.subheading}</Subheading>
        <CtaButton link={slice.primary.cta_link} />
      </div>
    </section>
  );
};

export default CtaSection;

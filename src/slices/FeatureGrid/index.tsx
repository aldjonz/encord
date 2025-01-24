import { FeatureCard } from "@/components/ui";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

export type FeatureGridProps = SliceComponentProps<Content.FeatureGridSlice>;

const FeatureGrid = ({ slice }: FeatureGridProps): JSX.Element => {
  return (
    <section
      id="features"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-max min-h-screen pt-32"
    >
      <h3 className="text-center text-4xl mb-8 text-[#594df6]">{slice.primary.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-56 px-8">  
        {slice.primary.cards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;

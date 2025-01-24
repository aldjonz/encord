import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

export type FeatureGridProps = SliceComponentProps<Content.FeatureGridSlice>;

const FeatureGrid = ({ slice }: FeatureGridProps): JSX.Element => {
  return (
    <section
      id="features"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-screen bg-white mt-32"
    >
      <p className="text-2xl font-bold text-center text-4xl mb-8">{slice.primary.title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-56 px-8">  
        {slice.primary.cards.map((card, index) => (
          <div key={index} className="flex flex-col gap-4 shadow-xl ring-2 ring-gray-100 p-4 rounded-xl">
            <PrismicNextImage field={card.icon} className="w-14 h-14 object-cover self-center" />
            <p className="text-2xl font-bold">{card.title}</p>
            <p className="text-2xl">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;

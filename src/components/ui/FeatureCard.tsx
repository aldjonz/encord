import { ImageField, KeyTextField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import React from 'react'

type Props = {
    icon: ImageField
    title: KeyTextField
    description: KeyTextField
}

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-6 shadow-xl ring-2 ring-gray-100 p-6 rounded-xl bg-white">
        <PrismicNextImage field={icon} className="w-14 h-14 object-cover self-center mb-4" />
        <p className="text-2xl text-[#594df6] text-center">{title}</p>
        <p className="text-lg">{description}</p>
    </div>
  )
}

export default FeatureCard
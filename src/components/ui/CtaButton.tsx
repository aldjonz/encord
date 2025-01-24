import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import React from 'react'

type Props = {
  link: LinkField
}

export default function CtaButton({ link }: Props) {
  return (
    <PrismicNextLink field={link} className="bg-[#594df6] hover:bg-gray-100 hover:text-black transition-all duration-300 text-white px-4 py-2 rounded-xl w-fit" />
  )
}
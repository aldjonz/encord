import { Client } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import React from 'react'

type LogoProps = {
    client: Client
}

const Logo = async ({ client }: LogoProps) => {

  const page = await client.getSingle("settings");

  return (
    <PrismicNextImage field={page.data.logo} height={page.data.logo.dimensions.height / 3.5} width={page.data.logo.dimensions.width / 3.5} />
  )
}

export default Logo
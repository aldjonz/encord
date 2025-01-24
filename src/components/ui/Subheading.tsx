import { KeyTextField } from '@prismicio/client'

type Props = {
    children: KeyTextField
}

const Subheading = ({ children }: Props) => {
  return (
    <h2 className="md:text-2xl text-xl">{children}</h2>
  )
}

export default Subheading
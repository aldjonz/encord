type Props = {
    children: React.ReactNode
}

const Heading = ({ children }: Props) => {
  return (
    <h1 className="text-[#594df6] text-4xl md:text-6xl">{children}</h1>
)
}

export default Heading
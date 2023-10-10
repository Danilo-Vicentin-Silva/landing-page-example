interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex ittem center justify-between w-full max-w-[1250px] px-[15px] mx-auto">
      {children}
    </div>
  )
}

export default Container

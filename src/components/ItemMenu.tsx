import Arrow from "@/assets/arrow-down.svg"
import Image from "next/image"

interface Props {
  name: string
}

const ItemMenu: React.FC<Props> = ({ name }) => {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={Arrow} alt="Arrow drowpdown" width={20} />
    </button>
  )
}

export default ItemMenu

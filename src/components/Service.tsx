import Image from "next/image"

interface Props {
  icon: any
  nameIcon: string
  text: string
}

const Service: React.FC<Props> = ({ icon, nameIcon, text }) => {
  return (
    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
      <div className="w-7 h-7 flex items-center justify-center">
        <Image src={icon} alt={nameIcon} />
      </div>
      <p className="flex-1 text-txt-gray pr-2">{text}</p>
    </li>
  )
}

export default Service

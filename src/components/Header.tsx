import Image from "next/image"
import Logo from "@/assets/logo.svg"
import ItemMenu from "./ItemMenu"

const Header = () => {
  return (
    <header className="bg-primary-orange relative flex text-xs md:text-base md:items-center md:justify-center w-screen md:p-2">
      <div className="flex item center justify-between w-full max-w-[1250px] px-[15px] mx-auto">
        <div className="flex flex-col md:flex-row flex-1 items-center justify-center">
          <div className="flex items-center gap-2 md:gap-14">
            <Image className="p-2 md:p-0" src={Logo} alt="Logo" width={50} />
            <ul className="flex items-center gap-5 md:gap-10">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

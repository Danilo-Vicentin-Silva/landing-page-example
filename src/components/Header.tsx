import Image from "next/image"
import Logo from "@/assets/logo.svg"
import ItemMenu from "./ItemMenu"

const Header = () => {
  return (
    <header className="relative flex text-xs md:text-base items-center w-full p-2 bg-primary-orange">
      <div className="hidden md:block absolute top-0 right-0 bg-primary-blue h-full z-0 w-[250px]"></div>
      <div className="flex ittem center justify-between w-full max-w-[1250px] px-[15px] mx-auto">
        <div className="flex flex-col md:flex-row flex-1 items-center justice-between ">
          <div className="flex items-center gap-2 md:gap-14">
            <Image className="p-2 md:p-0" src={Logo} alt="Logo" width={50} />
            <ul className="flex items-center gap-12">
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

import Search from "./Search"
import IconUser from "@/assets/icon-user.svg"
import Image from "next/image"

const Nav = () => {
  return (
    <nav className="h-10 flex items-center justify-between bg-primary-orange w-screen">
      <Search />
      <button className="h-10 p-2 gap-1 flex justify-center align-center bg-primary-blue w-1/2 md:w-1/5">
        <Image src={IconUser} alt="Icon user" width={20} />
        <span className="text-white font-bold">Acessar conta</span>
      </button>
    </nav>
  )
}

export default Nav

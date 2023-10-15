import IconSearch from "@/assets/icon-search.svg"
import Image from "next/image"

const Search = () => {
  return (
    <div className="flex items-center gap-4 w-1/2">
      <Image className="ml-2" src={IconSearch} alt="Icon search" width={20} />
      <input
        className="bg-transparent outline-none pr-5 text-white placeholder:text-white"
        type="search"
        placeholder="Pesquisar..."
      />
    </div>
  )
}

export default Search

import { useSearchParams } from "react-router-dom"
import search from "../../images/search.svg"
import { SearchIcon, Searchinput, WrapperSearch } from "./styled"

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <WrapperSearch>
      <SearchIcon src={search} />
      <Searchinput
        value={searchParams.get("search") || ""}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        placeholder="Search for movies or TV series"
      />
    </WrapperSearch>
  )
}
